
import { computed, reactive } from "vue";
import { useApp } from "./app";
import useVuelidate from '@vuelidate/core';
export function useEditPage({ store, props, formData, rules = {}, afterSubmit }) {

	const app = useApp();

	const state = reactive({
		id: null,
		pageReady: false,
		loading: false,
		submitted: false,
		saving: false,
		errorMsg: '',
		isPwd: true,
		isCPwd: true,
	});

	const $v = useVuelidate(rules, formData); // form validation

	const apiUrl = computed(() => {
		if (props.id) {
			return props.apiPath + '/' + encodeURIComponent(props.id);
		}
		return props.apiPath;
	});

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

	function validateForm() {
		state.submitted = true;
		$v.value.$validate();
		const isValid = !$v.value.$invalid;
		if(!isValid){
			app.flashMsg(props.formValidationError, props.formValidationMsg, "negative");
		}
		return isValid;
	}


	function submitForm() {
		const confirmMsg = props.msgBeforeSave;
		if (confirmMsg) {
			confirm.require({
				message: confirmMsg,
				header: props.msgTitle,
				icon: 'pi pi-pencil',
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

		if (!validateForm()) {
			return;
		}

		state.saving = true;

		let url = apiUrl.value;
		let id = props.id;
		const payload = normalizeFormData(formData);
		let data = { id, url, payload }
		try {
			let response = await store.updateRecord(data);
			if (afterSubmit) {
				afterSubmit(response)
			}
		}
		catch (err) {
			app.showPageRequestError(err);
		}
		finally {
			state.saving = false;
		}
	}

	function mapToFormData(apiData) {
		const formValues = { ...apiData }
		Object.keys(formValues).forEach(function (key) {
			const fieldValue = formValues[key];
			const fieldDefaultValue = formData[key];
			if (Array.isArray(fieldDefaultValue)) {
				if (fieldValue) {
					formValues[key] = fieldValue.toString().split(",");
				}
				else {
					formValues[key] = fieldDefaultValue
				}
			}
			else if (fieldDefaultValue instanceof Date && fieldValue) {
				formValues[key] = new Date(fieldValue);
			}
		});
		return formValues;
	}

	function mapOptionField(options, fieldname) {
		if (formData) {
			let currentValue = formData[fieldname] ?? null;
			if (currentValue) {
				if (Array.isArray(currentValue)) {
					let selectedOptions = [];
					let selectedOptionsValue = [];
					currentValue.forEach(val => {
						let option = options.find(v => v.value == val);
						selectedOptions.push(option);
						selectedOptionsValue.push(option.value)
					});
					formData[fieldname] = mapSelectedOptions; // update the select label
					formData[fieldname] = mapSelectedOptionsValue; // this will emit the value.
				}
				else {
					let selectedOption = options.find(v => v.value == currentValue);
					formData[fieldname] = selectedOption; // update the select label
					formData[fieldname] = selectedOption.value;  // this will emit the value.
				}
			}
		}
	}

	async function load() {
		state.pageReady = false;
		state.loading = true;
		state.editRecord = null;
		let url = apiUrl.value;
		try {
			await store.fetchEditRecord(url);
			const formValues = mapToFormData({ ...store.state.editRecord });
			Object.assign(formData, formValues); //update form data
			state.pageReady = true;
		}
		catch (err) {
			app.showPageRequestError(err);
		}
		finally {
			state.loading = false;
		}
	}

	function getFieldError(field) {
		const fieldErrors = $v.value[field]?.$silentErrors;
		if (fieldErrors?.length) {
			return fieldErrors[0].$message; //return the first error
		}
		return null;
	}

	function isFieldValid(field, index) {
		return ($v.value[field]?.$invalid || false) && state.submitted;
	}

	const computedProps = {
		apiUrl,
	}

	const methods = {
		load,
		submitForm,
		validateForm,
		getFieldError,
		isFieldValid,
		mapOptionField
	}

	return {
		state,
		computedProps,
		methods
	}
}