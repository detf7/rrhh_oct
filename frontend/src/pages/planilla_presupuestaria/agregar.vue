<template>
    <main class="main-page" id="">
        <template v-if="pageReady">
            <template v-if="showHeader">
                <section class="page-section q-pa-md" >
                    <div class="container">
                        <div class="row items-center q-col-gutter-md">
                            <div  v-if="!isSubPage"  class="col-auto " >
                                <q-btn @click="$router.go(-1)"      flat :rounded="false"  size=""  color="primary"  no-caps  unelevated   class="" >
                                    <q-icon name="arrow_back"></q-icon>                             
                                </q-btn>
                            </div>
                            <div  class="col col-md-auto " >
                                <div class=" text-h6 text-primary" >
                                    Agregar nuevo
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </template>
            <section class="page-section " >
                <div class="container">
                    <div class="row q-col-gutter-x-md">
                        <div  class="col-md-9 col-12 comp-grid" >
                            <div >
                                <q-form ref="observer" @submit.prevent="submitForm()">
                                <q-card  :flat="isSubPage" class="q-pa-md nice-shadow-16">
                                    <div class="row q-col-gutter-x-md">
                                        <div class="col-md-6 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Fuente 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'fuente')"  api-path="components_data/fuente_option_list_2"  v-slot="req">
                                                        <q-select @update:model-value="(val)=>fuenteAutofill(val)"   :loading="req.loading"   ref="ctrlfuente" emit-value map-options  v-model="formData.fuente" :options="req.response" label="Fuente"  :error="isFieldValid('fuente')" :error-message="getFieldError('fuente')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nivel 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'nivel')"  api-path="components_data/nivel_option_list_2"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlnivel" emit-value map-options  v-model="formData.nivel" :options="req.response" label="Nivel"  :error="isFieldValid('nivel')" :error-message="getFieldError('nivel')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Cantidad total de items del Nivel 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcantidad_items" v-model.trim="formData.cantidad_items"  label="Cantidad total de items del Nivel" type="number" placeholder="Cantidad"   step="any"    
                                                    class="" :error="isFieldValid('cantidad_items')" :error-message="getFieldError('cantidad_items')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Haber Básico 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlhaber_basico" v-model.trim="formData.haber_basico"  label="Haber Básico" type="number" placeholder="Escribir Haber Básico"   step="0.1"  readonly  
                                                    class="" :error="isFieldValid('haber_basico')" :error-message="getFieldError('haber_basico')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <br>
                                        <div class="col-12">
                                            <p></p>
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Denominacion Cargo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="formData.denominacion_cargo = ''" :load-on-mount="false" :api-path="`components_data/denominacion_cargo_option_list_2?lookup_fuente=${formData.fuente}`"  v-slot="req">
                                                        <q-select @update:model-value="(val)=>denominacionCargoAutofill(val)"   :loading="req.loading"   ref="ctrldenominacion_cargo" emit-value map-options  v-model="formData.denominacion_cargo" :options="req.response" label="Denominacion Cargo"  :error="isFieldValid('denominacion_cargo')" :error-message="getFieldError('denominacion_cargo')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Descripción del puesto 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrldescrip_puesto" rows="2"  v-model="formData.descrip_puesto" placeholder="Descripción"    type="textarea" :error="isFieldValid('descrip_puesto')" :error-message="getFieldError('descrip_puesto')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Unidad Organizacional 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'unidad_organiz')"  api-path="components_data/unidad_organiz_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlunidad_organiz" emit-value map-options  v-model="formData.unidad_organiz" :options="req.response" label="Unidad Organizacional"  :error="isFieldValid('unidad_organiz')" :error-message="getFieldError('unidad_organiz')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Clasificacion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-select       ref="ctrlclasificacion" emit-value map-options  v-model="formData.clasificacion" :options="app.menus.clasificacionItems" label="Clasificacion"  :error="isFieldValid('clasificacion')" :error-message="getFieldError('clasificacion')">
                                                    </q-select> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Codgestion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcodgestion" v-model.trim="formData.codgestion"  label="Codgestion" type="text" placeholder="Escribir Codgestion"      
                                                    class="" :error="isFieldValid('codgestion')" :error-message="getFieldError('codgestion')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <input name="ctrlidplanillapres"  ref="ctrlidplanillapres" v-model="formData.idplanillapres" type="hidden" />
                                    </div>
                                    <div v-if="showSubmitButton" class="text-center q-my-md">
                                        <q-btn type="submit"    :rounded="false"  color="primary"  no-caps  unelevated    icon-right="send" :loading="saving">
                                            {{ submitButtonLabel }}
                                            <template v-slot:loading>
                                                <q-spinner-oval />
                                            </template>
                                        </q-btn>
                                    </div>
                                </q-card>
                                </q-form>
                                <slot :submit="submitForm" :saving="saving"></slot>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>
    </main>
</template>
<script setup>
		import {  computed, ref, reactive, toRefs } from 'vue';
	import { required, numeric, } from 'src/services/validators';
	import { usePageStore } from 'src/stores/page';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { ApiService } from 'src/services/api';
	import { useAddPage } from 'src/composables/addpage';
	//[--PAGE-IMPORT-STATEMENT--]
	const props = defineProps({
		pageName : {
			type : String,
			default : 'planilla_presupuestaria',
		},
		routeName : {
			type : String,
			default : 'planilla_presupuestariaagregar',
		},
		apiPath : {
			type : String,
			default : 'planilla_presupuestaria/agregar',
		},
		submitButtonLabel: {
			type: String,
			default: "Guardar",
		},
		formValidationError: {
			type: String,
			default: "El formulario no es válido",
		},
		formValidationMsg: {
			type: String,
			default: "Por favor complete el formulario",
		},
		msgTitle: {
			type: String,
			default: "Crear registro",
		},
		msgAfterSave: {
			type: String,
			default: "Grabar agregado exitosamente",
		},
		msgBeforeSave: {
			type: String,
			default: "",
		},
		showHeader: {
			type: Boolean,
			default: true,
		},
		showSubmitButton: {
			type: Boolean,
			default: true,
		},
		redirect: {
			type : Boolean,
			default : true,
		},
		isSubPage: {
			type : Boolean,
			default : false,
		},
		pageData: { // use to set formData default values from another page
			type: Object,
			default: () => {} 
		},
	});
	const store = usePageStore(props.pageName);
	const app = useApp();// application state and methods
	const formDefaultValues = {
		fuente: "", 
		nivel: "", 
		cantidad_items: "", 
		haber_basico: "", 
		denominacion_cargo: "", 
		descrip_puesto: "", 
		unidad_organiz: "", 
		clasificacion: "", 
		codgestion: "", 
		idplanillapres: "", 
	};
	const formData = reactive({ ...formDefaultValues });
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			fuente: { numeric },
		nivel: { numeric },
		cantidad_items: { numeric },
		haber_basico: { numeric },
		idplanillapres: { required }
		}
	});
	const page = useAddPage({ store, props, formData, rules, beforeSubmit, afterSubmit });// page form hook
	//event raised before form submit
	function beforeSubmit(){
		return true;
	}
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		page.setFormDefaultValues(); //reset form data
		if(app.isDialogOpen()){
			// if page is open as dialog, close dialog
			app.closeDialogs();
		}
		else if(props.redirect) {
			app.navigateTo(`/`);
		}
	}
	const {  saving, pageReady,   } = toRefs(page.state);
	const { submitForm, isFieldValid, getFieldError, mapOptionField } = page.methods;
	useMeta(() => {
		return {
			//set browser title
			title: "Agregar nuevo"
		}
	});
	//auto fill other inputs on fuente change
	async function fuenteAutofill(val){
		const resp = await ApiService.get(`components_data/planilla_presupuestaria_fuente_autofill?value=${val}`);
		const data = resp.data[0];
		if(data){
formData.codgestion = data.codgestion;
		}
	}
	//auto fill other inputs on denominacion_cargo change
	async function denominacionCargoAutofill(val){
		const resp = await ApiService.get(`components_data/planilla_presupuestaria_denominacion_cargo_autofill?value=${val}`);
		const data = resp.data[0];
		if(data){
formData.haber_basico = data.haber_basico;
		}
	}
	// expose page object for other components access
	defineExpose({
		page
	});
</script>
<style scoped>
</style>
<style scoped>

</style>
