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
                                                    Salarios 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlsalarios" v-model.trim="formData.salarios"  label="Salarios" type="text" placeholder="Escribir Salarios"      
                                                    class="" :error="isFieldValid('salarios')" :error-message="getFieldError('salarios')">
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
                                                    <q-input   ref="ctrlausencia" v-model.trim="formData.ausencia"  label="Ausencia" type="number" placeholder="Escribir Ausencia"   step="any"    
                                                    class="" :error="isFieldValid('ausencia')" :error-message="getFieldError('ausencia')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Atraso 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlatraso" v-model.trim="formData.atraso"  label="Atraso" type="number" placeholder="Escribir Atraso"   step="any"    
                                                    class="" :error="isFieldValid('atraso')" :error-message="getFieldError('atraso')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Sminimo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlsminimo" v-model.trim="formData.sminimo"  label="Sminimo" type="number" placeholder="Escribir Sminimo"   step="0.1"    
                                                    class="" :error="isFieldValid('sminimo')" :error-message="getFieldError('sminimo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Haberbasico 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlhaberbasico" v-model.trim="formData.haberbasico"  label="Haberbasico" type="number" placeholder="Escribir Haberbasico"   step="0.1"    
                                                    class="" :error="isFieldValid('haberbasico')" :error-message="getFieldError('haberbasico')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Tsalario 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltsalario" v-model.trim="formData.tsalario"  label="Tsalario" type="number" placeholder="Escribir Tsalario"   step="0.1"    
                                                    class="" :error="isFieldValid('tsalario')" :error-message="getFieldError('tsalario')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Tdescuento 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltdescuento" v-model.trim="formData.tdescuento"  label="Tdescuento" type="number" placeholder="Escribir Tdescuento"   step="0.1"    
                                                    class="" :error="isFieldValid('tdescuento')" :error-message="getFieldError('tdescuento')">
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
                                                    Dias 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldias" v-model.trim="formData.dias"  label="Dias" type="number" placeholder="Escribir Dias"   step="0.1"    
                                                    class="" :error="isFieldValid('dias')" :error-message="getFieldError('dias')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Cas 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcas" v-model.trim="formData.cas"  label="Cas" type="number" placeholder="Escribir Cas"   step="0.1"    
                                                    class="" :error="isFieldValid('cas')" :error-message="getFieldError('cas')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Mantiguedad 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlmantiguedad" v-model.trim="formData.mantiguedad"  label="Mantiguedad" type="number" placeholder="Escribir Mantiguedad"   step="0.1"    
                                                    class="" :error="isFieldValid('mantiguedad')" :error-message="getFieldError('mantiguedad')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Frontera 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlfrontera" v-model.trim="formData.frontera"  label="Frontera" type="number" placeholder="Escribir Frontera"   step="0.1"    
                                                    class="" :error="isFieldValid('frontera')" :error-message="getFieldError('frontera')">
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
                                                    <q-input   ref="ctrlabandono" v-model.trim="formData.abandono"  label="Abandono" type="number" placeholder="Escribir Abandono"   step="any"    
                                                    class="" :error="isFieldValid('abandono')" :error-message="getFieldError('abandono')">
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
                                                    <q-input   ref="ctrlfalta" v-model.trim="formData.falta"  label="Falta" type="number" placeholder="Escribir Falta"   step="any"    
                                                    class="" :error="isFieldValid('falta')" :error-message="getFieldError('falta')">
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
                                                    Glosa 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlglosa" v-model.trim="formData.glosa"  label="Glosa" type="text" placeholder="Escribir Glosa"      
                                                    class="" :error="isFieldValid('glosa')" :error-message="getFieldError('glosa')">
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
			default : 'plasalario',
		},
		routeName : {
			type : String,
			default : 'plasalarioadd',
		},
		apiPath : {
			type : String,
			default : 'plasalario/add',
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
		salarios: "", 
		ausencia: "", 
		atraso: "", 
		sminimo: "", 
		haberbasico: "", 
		tsalario: "", 
		tdescuento: "", 
		codunidad: "", 
		dias: "", 
		cas: "", 
		mantiguedad: "", 
		frontera: "", 
		abandono: "", 
		falta: "", 
		unidad: "", 
		codusuario: "", 
		cargopla: "", 
		denominacion: "", 
		motivo: "", 
		tipo: "", 
		glosa: "", 
	};
	
	const formData = reactive({ ...formDefaultValues });
	
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			codpla: { numeric },
		ausencia: { numeric },
		atraso: { numeric },
		sminimo: { numeric },
		haberbasico: { numeric },
		tsalario: { numeric },
		tdescuento: { numeric },
		codunidad: { numeric },
		dias: { numeric },
		cas: { numeric },
		mantiguedad: { numeric },
		frontera: { numeric },
		abandono: { numeric },
		falta: { numeric }
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
			app.navigateTo(`/plasalario`);
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
