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
                                                    Fechaini 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlfechaini" v-model="formData.fechaini" label="Fechaini"    :error="isFieldValid('fechaini')" :error-message="getFieldError('fechaini')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlfechaini" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.fechaini" @input="$refs.ctrlfechaini.hide()" />
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
                                                    Fechafin 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlfechafin" v-model="formData.fechafin" label="Fechafin"    :error="isFieldValid('fechafin')" :error-message="getFieldError('fechafin')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlfechafin" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.fechafin" @input="$refs.ctrlfechafin.hide()" />
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
                                                    Fechabaja 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlfechabaja" v-model="formData.fechabaja" label="Fechabaja"    :error="isFieldValid('fechabaja')" :error-message="getFieldError('fechabaja')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlfechabaja" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.fechabaja" @input="$refs.ctrlfechabaja.hide()" />
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
                                                    Vigente 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlvigente" v-model.trim="formData.vigente"  label="Vigente" type="text" placeholder="Escribir Vigente"      
                                                    class="" :error="isFieldValid('vigente')" :error-message="getFieldError('vigente')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Fecha 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlfecha" v-model="formData.fecha" label="Fecha"    :error="isFieldValid('fecha')" :error-message="getFieldError('fecha')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlfecha" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.fecha" @input="$refs.ctrlfecha.hide()" />
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
                                                    Dias 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldias" v-model.trim="formData.dias"  label="Dias" type="number" placeholder="Escribir Dias"   step="any"    
                                                    class="" :error="isFieldValid('dias')" :error-message="getFieldError('dias')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Codunidad 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'codunidad')"  api-path="components_data/codunidad_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlcodunidad" emit-value map-options  v-model="formData.codunidad" :options="req.response" label="Codunidad"  :error="isFieldValid('codunidad')" :error-message="getFieldError('codunidad')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Codescala 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'codescala')"  api-path="components_data/codescala_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlcodescala" emit-value map-options  v-model="formData.codescala" :options="req.response" label="Codescala"  :error="isFieldValid('codescala')" :error-message="getFieldError('codescala')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Codcontrol 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcodcontrol" v-model.trim="formData.codcontrol"  label="Codcontrol" type="text" placeholder="Escribir Codcontrol"      
                                                    class="" :error="isFieldValid('codcontrol')" :error-message="getFieldError('codcontrol')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Glosa 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlglosa" v-model.trim="formData.glosa"  label="Glosa" type="text" placeholder="Escribir Glosa"      
                                                    class="" :error="isFieldValid('glosa')" :error-message="getFieldError('glosa')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Codevaluacion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'codevaluacion')"  api-path="components_data/codevaluacion_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlcodevaluacion" emit-value map-options  v-model="formData.codevaluacion" :options="req.response" label="Codevaluacion"  :error="isFieldValid('codevaluacion')" :error-message="getFieldError('codevaluacion')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Cargopla 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcargopla" v-model.trim="formData.cargopla"  label="Cargopla" type="text" placeholder="Escribir Cargopla"      
                                                    class="" :error="isFieldValid('cargopla')" :error-message="getFieldError('cargopla')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Tipo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltipo" v-model.trim="formData.tipo"  label="Tipo" type="text" placeholder="Escribir Tipo"      
                                                    class="" :error="isFieldValid('tipo')" :error-message="getFieldError('tipo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Resolucion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlresolucion" v-model.trim="formData.resolucion"  label="Resolucion" type="text" placeholder="Escribir Resolucion"      
                                                    class="" :error="isFieldValid('resolucion')" :error-message="getFieldError('resolucion')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Motivo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlmotivo" v-model.trim="formData.motivo"  label="Motivo" type="text" placeholder="Escribir Motivo"      
                                                    class="" :error="isFieldValid('motivo')" :error-message="getFieldError('motivo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Codusuario 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'codusuario')"  api-path="components_data/codusuario_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlcodusuario" emit-value map-options  v-model="formData.codusuario" :options="req.response" label="Codusuario"  :error="isFieldValid('codusuario')" :error-message="getFieldError('codusuario')">
                                                        </q-select> 
                                                    </api-data-source>
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
	import { useAddPage } from 'src/composables/addpage';
	
	const props = defineProps({
		pageName : {
			type : String,
			default : 'eventuales',
		},
		routeName : {
			type : String,
			default : 'eventualesadd',
		},
		apiPath : {
			type : String,
			default : 'eventuales/add',
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
		fechaini: new Date(), 
		fechafin: new Date(), 
		fechabaja: new Date(), 
		vigente: "", 
		fecha: new Date(), 
		dias: "", 
		codunidad: "", 
		codescala: "", 
		codcontrol: "", 
		glosa: "", 
		codevaluacion: "", 
		cargopla: "", 
		tipo: "", 
		resolucion: "", 
		motivo: "", 
		codusuario: "", 
	};
	
	const formData = reactive({ ...formDefaultValues });
	
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			dias: { numeric },
		codunidad: { numeric },
		codescala: { numeric }
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
			app.navigateTo(`/eventuales`);
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
	
	// expose page object for other components access
	defineExpose({
		page
	});
</script>
<style scoped>
</style>
