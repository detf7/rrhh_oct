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
                                                    Codpla 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'codpla')"  api-path="components_data/codpla_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlcodpla" emit-value map-options  v-model="formData.codpla" :options="req.response" label="Codpla"  :error="isFieldValid('codpla')" :error-message="getFieldError('codpla')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Cargos 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcargos" v-model.trim="formData.cargos"  label="Cargos" type="text" placeholder="Escribir Cargos"      
                                                    class="" :error="isFieldValid('cargos')" :error-message="getFieldError('cargos')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Montodia 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlmontodia" v-model.trim="formData.montodia"  label="Montodia" type="number" placeholder="Escribir Montodia"   step="0.1"    
                                                    class="" :error="isFieldValid('montodia')" :error-message="getFieldError('montodia')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Falta 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlfalta" v-model.trim="formData.falta"  label="Falta" type="number" placeholder="Escribir Falta"   step="0.1"    
                                                    class="" :error="isFieldValid('falta')" :error-message="getFieldError('falta')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Abandono 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlabandono" v-model.trim="formData.abandono"  label="Abandono" type="number" placeholder="Escribir Abandono"   step="0.1"    
                                                    class="" :error="isFieldValid('abandono')" :error-message="getFieldError('abandono')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Ausencia 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlausencia" v-model.trim="formData.ausencia"  label="Ausencia" type="number" placeholder="Escribir Ausencia"   step="0.1"    
                                                    class="" :error="isFieldValid('ausencia')" :error-message="getFieldError('ausencia')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Boleta 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlboleta" v-model.trim="formData.boleta"  label="Boleta" type="number" placeholder="Escribir Boleta"   step="0.1"    
                                                    class="" :error="isFieldValid('boleta')" :error-message="getFieldError('boleta')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Total 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltotal" v-model.trim="formData.total"  label="Total" type="number" placeholder="Escribir Total"   step="0.1"    
                                                    class="" :error="isFieldValid('total')" :error-message="getFieldError('total')">
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
                                                    <q-input   ref="ctrlcodunidad" v-model.trim="formData.codunidad"  label="Codunidad" type="number" placeholder="Escribir Codunidad"   step="any"    
                                                    class="" :error="isFieldValid('codunidad')" :error-message="getFieldError('codunidad')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Diastrabajo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldiastrabajo" v-model.trim="formData.diastrabajo"  label="Diastrabajo" type="number" placeholder="Escribir Diastrabajo"   step="0.1"    
                                                    class="" :error="isFieldValid('diastrabajo')" :error-message="getFieldError('diastrabajo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Unidad 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlunidad" v-model.trim="formData.unidad"  label="Unidad" type="text" placeholder="Escribir Unidad"      
                                                    class="" :error="isFieldValid('unidad')" :error-message="getFieldError('unidad')">
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
                                                    Denominacion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldenominacion" v-model.trim="formData.denominacion"  label="Denominacion" type="text" placeholder="Escribir Denominacion"      
                                                    class="" :error="isFieldValid('denominacion')" :error-message="getFieldError('denominacion')">
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
			default : 'plarefrigerio',
		},
		routeName : {
			type : String,
			default : 'plarefrigerioadd',
		},
		apiPath : {
			type : String,
			default : 'plarefrigerio/add',
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
		codpla: "", 
		cargos: "", 
		montodia: "", 
		falta: "", 
		abandono: "", 
		ausencia: "", 
		boleta: "", 
		total: "", 
		codunidad: "", 
		diastrabajo: "", 
		unidad: "", 
		glosa: "", 
		cargopla: "", 
		denominacion: "", 
		motivo: "", 
		tipo: "", 
		codusuario: "", 
	};
	
	const formData = reactive({ ...formDefaultValues });
	
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			codpla: { numeric },
		montodia: { numeric },
		falta: { numeric },
		abandono: { numeric },
		ausencia: { numeric },
		boleta: { numeric },
		total: { numeric },
		codunidad: { numeric },
		diastrabajo: { numeric }
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
			app.navigateTo(`/plarefrigerio`);
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
