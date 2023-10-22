import { reactive, computed, watch, onMounted } from "vue";
import { useApp } from 'src/composables/app';
import useVuelidate from '@vuelidate/core';
export function useAddPage({ store, props, formData, rules = {}, beforeSubmit, afterSubmit }) {

	const app = useApp();

	const storeState = store.state;

	const state = reactive({
		id: null,
		pageReady: false,
		submitted: false,
		saving: false,
		isPwd: true,
		isCPwd: true,
	});

	const $v = useVuelidate(rules, formData); // form validation

	setFormDefaultValues();

	const apiUrl = computed(() => {
		return props.apiPath
	});

	function validateForm() {
		state.submitted = true;
		$v.value.$validate();
		const isValid = !$v.value.$invalid;
		if(!isValid){
			app.flashMsg(props.formValidationError, props.formValidationMsg, "negative");
		}
		return isValid;
	}


	function normalizeFormData(formValues) {
		const postData = { ...formValues }
		Object.keys(postData).forEach(function (key) {
			const fieldValue = postData[key];
			if (Array.isArray(fieldValue)) {
				let firstItem = fieldValue[0];
				if (firstItem && typeof firstItem == "string") {
					postData[key] = fieldValue.toString();
				}
				else {
					postData[key] = fieldValue;
				}
			}
			else if (fieldValue instanceof Date) {
				postData[key] = fieldValue.toISOString().slice(0, 19).replace('T', ' ');
			}
			else if (fieldValue === '') {
				postData[key] = null;
			}
		});
		return postData;
	}

	function submitForm() {
		state.submitted = true;
		if (beforeSubmit !== undefined) {
			if (!beforeSubmit()) { return; }
		}

		if (!validateForm()) {
			return;
		}

		const confirmMsg = props.msgBeforeSave;
		if (confirmMsg) {
			confirm.require({
				message: confirmMsg,
				header: props.msgTitle,
				icon: 'pi pi-save',
				accept: async () => {
					saveFormData();
				},
				reject: () => {
					//callback to execute when user rejects the action
				}
			});
		}
		else {
			saveFormData();
		}
	}

	async function saveFormData() {
		
		state.saving = true;
		const url = apiUrl.value;
		let payload;
		if (Array.isArray(formData)) {
			payload = formData.map(form => normalizeFormData(form));
		}
		else {
			payload = normalizeFormData(formData)
		}

		const data = { url, payload }
		try {
			
			const response = await store.saveRecord(data);
			if (afterSubmit) {
				afterSubmit(response);
			}
		}
		catch (err) {
			app.showPageRequestError(err);
		}
		finally{
			state.saving = false;
		}
	}

	function setFormDefaultValues() {
		const storeFormData = computed(() => storeState.formData); // from data from store
		const pageData = props.pageData; // when form default values is passed by component props
		const formDefaultValues = { ...pageData, ...storeFormData.value };

		if (!Array.isArray(formData)) {
			Object.assign(formData, formDefaultValues); //reset form data
		}
	}
	function mapOptionField (options, fieldname){
		if(formData){
			let currentValue = formData[fieldname] ?? null;
			if(currentValue){
				if(Array.isArray(currentValue)){
					let selectedOptions = [];
					let selectedOptionsValue = [];
					currentValue.forEach( val =>{
						let option = options.find(v => v.value == val);
						selectedOptions.push(option);
						selectedOptionsValue.push(option.value)
					});
					formData[fieldname] = mapSelectedOptions; // update the select label
					formData[fieldname] = mapSelectedOptionsValue; // this will emit the value.
				}
				else{
					let selectedOption = options.find(v => v.value == currentValue);
					formData[fieldname] = selectedOption; // update the select label
					formData[fieldname] = selectedOption.value;  // this will emit the value.
				}
			}
		}
	}
	
	function isFieldValid(field, index) {
		if (index === undefined) {
			return ($v.value[field]?.$invalid || false) && state.submitted;
		}
		else{
			return  ($v.value.$each.$response.$errors[index][field]?.length || false) && state.submitted;
		}
	}

	function getFieldError(field, index) {
		let fieldErrors = null;
		if (index === undefined) {
			fieldErrors = $v.value[field]?.$silentErrors;
			if (fieldErrors?.length) {
				return fieldErrors[0].$message; //return the first error
			}
		}
		else {
			fieldErrors = $v.value.$each.$response.$errors[index][field];
			if (fieldErrors?.length) {
				return fieldErrors[0].$message; //return the first error
			}
		}
		return null;
	}

	watch(() => props.pageData, (current) => {
		Object.assign(formData, current);
	},
		{ deep: true, immediate: true }
	);

	onMounted(()=>{ 
		state.pageReady = true;
	});
	
	const computedProps = {
		apiUrl,
	}

	const methods = {
		submitForm,
		getFieldError,
		isFieldValid,
		mapOptionField
	}

	return {
		validateForm,
		setFormDefaultValues,
		formData,
		state,
		computedProps,
		methods
	}

}
