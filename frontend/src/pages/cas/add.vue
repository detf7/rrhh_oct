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
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Idpermanente *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'idpermanente')"  api-path="components_data/idpermanente_option_list"  v-slot="req">
                                                        <q-select @update:model-value="(val)=>idpermanenteAutofill(val)"   :loading="req.loading"   ref="ctrlidpermanente" emit-value map-options  v-model="formData.idpermanente" :options="req.response" label="Idpermanente"  :error="isFieldValid('idpermanente')" :error-message="getFieldError('idpermanente')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Código CAS 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldato_cas" v-model.trim="formData.dato_cas"  label="Código CAS" type="text" placeholder="Escribir Código CAS"      
                                                    class="" :error="isFieldValid('dato_cas')" :error-message="getFieldError('dato_cas')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Fecha de Recepcion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlfecha_recepcion" v-model="formData.fecha_recepcion" label="Fecha de Recepcion"    :error="isFieldValid('fecha_recepcion')" :error-message="getFieldError('fecha_recepcion')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlfecha_recepcion" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.fecha_recepcion" @input="$refs.ctrlfecha_recepcion.hide()" />
                                                        </q-popup-proxy>
                                                        </q-icon>
                                                    </template>
                                                    </q-input>      
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Años 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input @update:model-value="(val)=>aniosServAutofill(val)"  ref="ctrlanios_serv" v-model.trim="formData.anios_serv"  label="Años" type="number" placeholder="Escribir Años"   step="any"    
                                                    class="" :error="isFieldValid('anios_serv')" :error-message="getFieldError('anios_serv')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Meses 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlmeses_serv" v-model.trim="formData.meses_serv"  label="Meses" type="number" placeholder="Escribir Meses"   step="any"    
                                                    class="" :error="isFieldValid('meses_serv')" :error-message="getFieldError('meses_serv')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Dias 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldias_serv" v-model.trim="formData.dias_serv"  label="Dias" type="number" placeholder="Escribir Dias"   step="any"    
                                                    class="" :error="isFieldValid('dias_serv')" :error-message="getFieldError('dias_serv')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Observaciones 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrldescripcion_cas" rows="3"  v-model="formData.descripcion_cas" placeholder="Escribir Observaciones"    type="textarea" :error="isFieldValid('descripcion_cas')" :error-message="getFieldError('descripcion_cas')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Monto Cas 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlmonto_cas" v-model.trim="formData.monto_cas"  label="Monto Cas" type="number" placeholder="Escribir Monto Cas"   step="0.1"  readonly  
                                                    class="" :error="isFieldValid('monto_cas')" :error-message="getFieldError('monto_cas')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Incremento 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlincremento" v-model.trim="formData.incremento"  label="Incremento" type="number" placeholder="Escribir Incremento"   step="any"    
                                                    class="" :error="isFieldValid('incremento')" :error-message="getFieldError('incremento')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
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
	
	const props = defineProps({
		pageName : {
			type : String,
			default : 'cas',
		},
		routeName : {
			type : String,
			default : 'casadd',
		},
		apiPath : {
			type : String,
			default : 'cas/add',
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
		idpermanente: "", 
		dato_cas: "", 
		fecha_recepcion: new Date(), 
		anios_serv: "", 
		meses_serv: "", 
		dias_serv: "", 
		descripcion_cas: "", 
		monto_cas: "", 
		incremento: "", 
	};
	
	const formData = reactive({ ...formDefaultValues });
	
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			idpermanente: { required, numeric },
		anios_serv: { numeric },
		meses_serv: { numeric },
		dias_serv: { numeric },
		monto_cas: { numeric },
		incremento: { numeric }
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
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/cas`);
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
	
	//auto fill other inputs on idpermanente change
	async function idpermanenteAutofill(val){
		const resp = await ApiService.get(`components_data/cas_idpermanente_autofill?value=${val}`);
		const data = resp.data[0];
		if(data){
		}
	}
	
	//auto fill other inputs on anios_serv change
	async function aniosServAutofill(val){
		const resp = await ApiService.get(`components_data/cas_anios_serv_autofill?value=${val}`);
		const data = resp.data[0];
		if(data){
formData.idpermanente = data.idpermanente;
		}
	}
	
	// expose page object for other components access
	defineExpose({
		page
	});
</script>
<style scoped>
</style>
