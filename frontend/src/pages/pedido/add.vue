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
                                                    Codalmacen 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'codalmacen')"  api-path="components_data/codalmacen_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlcodalmacen" emit-value map-options  v-model="formData.codalmacen" :options="req.response" label="Codalmacen"  :error="isFieldValid('codalmacen')" :error-message="getFieldError('codalmacen')">
                                                        </q-select> 
                                                    </api-data-source>
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
                                                    Aprobado 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlaprobado" v-model.trim="formData.aprobado"  label="Aprobado" type="text" placeholder="Escribir Aprobado"      
                                                    class="" :error="isFieldValid('aprobado')" :error-message="getFieldError('aprobado')">
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
                                                    Codgestion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'codgestion')"  api-path="components_data/codgestion_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlcodgestion" emit-value map-options  v-model="formData.codgestion" :options="req.response" label="Codgestion"  :error="isFieldValid('codgestion')" :error-message="getFieldError('codgestion')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Codsolicita 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'codsolicita')"  api-path="components_data/codusuario_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlcodsolicita" emit-value map-options  v-model="formData.codsolicita" :options="req.response" label="Codsolicita"  :error="isFieldValid('codsolicita')" :error-message="getFieldError('codsolicita')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Idpedido *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlidpedido" v-model.trim="formData.idpedido"  label="Idpedido" type="text" placeholder="Escribir Idpedido"      
                                                    class="" :error="isFieldValid('idpedido')" :error-message="getFieldError('idpedido')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Autorizacion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'autorizacion')"  api-path="components_data/codusuario_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlautorizacion" emit-value map-options  v-model="formData.autorizacion" :options="req.response" label="Autorizacion"  :error="isFieldValid('autorizacion')" :error-message="getFieldError('autorizacion')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Descripcion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldescripcion" v-model.trim="formData.descripcion"  label="Descripcion" type="text" placeholder="Escribir Descripcion"      
                                                    class="" :error="isFieldValid('descripcion')" :error-message="getFieldError('descripcion')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Estado 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlestado" v-model.trim="formData.estado"  label="Estado" type="text" placeholder="Escribir Estado"      
                                                    class="" :error="isFieldValid('estado')" :error-message="getFieldError('estado')">
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
			default : 'pedido',
		},
		routeName : {
			type : String,
			default : 'pedidoadd',
		},
		apiPath : {
			type : String,
			default : 'pedido/add',
		},
		submitButtonLabel: {
			type: String,
			default: "Entregar",
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
		codalmacen: "", 
		codunidad: "", 
		fecha: new Date(), 
		aprobado: "", 
		glosa: "", 
		codgestion: "", 
		codsolicita: "", 
		idpedido: "", 
		autorizacion: "", 
		descripcion: "", 
		estado: "", 
		tipo: "", 
	};
	
	const formData = reactive({ ...formDefaultValues });
	
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			codalmacen: { numeric },
		codunidad: { numeric },
		idpedido: { required }
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
			app.navigateTo(`/pedido`);
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
