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
                                                    Costo Mensual 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcosto_mensual" v-model.trim="formData.costo_mensual"  label="Costo Mensual" type="number" placeholder="Escribir Costo Mensual"   step="0.1"    
                                                    class="" :error="isFieldValid('costo_mensual')" :error-message="getFieldError('costo_mensual')">
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
                                                    Ageneral 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlageneral" v-model.trim="formData.ageneral"  label="Ageneral" type="number" placeholder="Escribir Ageneral"   step="any"    
                                                    class="" :error="isFieldValid('ageneral')" :error-message="getFieldError('ageneral')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Mgeneral 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlmgeneral" v-model.trim="formData.mgeneral"  label="Mgeneral" type="number" placeholder="Escribir Mgeneral"   step="any"    
                                                    class="" :error="isFieldValid('mgeneral')" :error-message="getFieldError('mgeneral')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Aespecifica 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlaespecifica" v-model.trim="formData.aespecifica"  label="Aespecifica" type="number" placeholder="Escribir Aespecifica"   step="any"    
                                                    class="" :error="isFieldValid('aespecifica')" :error-message="getFieldError('aespecifica')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Mespecifica 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlmespecifica" v-model.trim="formData.mespecifica"  label="Mespecifica" type="number" placeholder="Escribir Mespecifica"   step="any"    
                                                    class="" :error="isFieldValid('mespecifica')" :error-message="getFieldError('mespecifica')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Normativa Codigo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnormativa_codigo" v-model.trim="formData.normativa_codigo"  label="Normativa Codigo" type="number" placeholder="Escribir Normativa Codigo"   step="any"    
                                                    class="" :error="isFieldValid('normativa_codigo')" :error-message="getFieldError('normativa_codigo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Normativa Anyo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnormativa_anyo" v-model.trim="formData.normativa_anyo"  label="Normativa Anyo" type="number" placeholder="Escribir Normativa Anyo"   step="any"    
                                                    class="" :error="isFieldValid('normativa_anyo')" :error-message="getFieldError('normativa_anyo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Numero Items 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnumero_items" v-model.trim="formData.numero_items"  label="Numero Items" type="number" placeholder="Escribir Numero Items"   step="any"    
                                                    class="" :error="isFieldValid('numero_items')" :error-message="getFieldError('numero_items')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nivel 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnivel" v-model.trim="formData.nivel"  label="Nivel" type="number" placeholder="Escribir Nivel"   step="any"    
                                                    class="" :error="isFieldValid('nivel')" :error-message="getFieldError('nivel')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Entidad 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlentidad" v-model.trim="formData.entidad"  label="Entidad" type="text" placeholder="Escribir Entidad"      
                                                    class="" :error="isFieldValid('entidad')" :error-message="getFieldError('entidad')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Financiero 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlfinanciero" v-model.trim="formData.financiero"  label="Financiero" type="text" placeholder="Escribir Financiero"      
                                                    class="" :error="isFieldValid('financiero')" :error-message="getFieldError('financiero')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Organizacion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlorganizacion" v-model.trim="formData.organizacion"  label="Organizacion" type="text" placeholder="Escribir Organizacion"      
                                                    class="" :error="isFieldValid('organizacion')" :error-message="getFieldError('organizacion')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Categoria 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcategoria" v-model.trim="formData.categoria"  label="Categoria" type="text" placeholder="Escribir Categoria"      
                                                    class="" :error="isFieldValid('categoria')" :error-message="getFieldError('categoria')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Detalle 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldetalle" v-model.trim="formData.detalle"  label="Detalle" type="text" placeholder="Escribir Detalle"      
                                                    class="" :error="isFieldValid('detalle')" :error-message="getFieldError('detalle')">
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
                                                    Codgestion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcodgestion" v-model.trim="formData.codgestion"  label="Codgestion" type="text" placeholder="Escribir Codgestion"      
                                                    class="" :error="isFieldValid('codgestion')" :error-message="getFieldError('codgestion')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Habilitado 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlhabilitado" v-model.trim="formData.habilitado"  label="Habilitado" type="text" placeholder="Escribir Habilitado"      
                                                    class="" :error="isFieldValid('habilitado')" :error-message="getFieldError('habilitado')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Academico 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlacademico" v-model.trim="formData.academico"  label="Academico" type="text" placeholder="Escribir Academico"      
                                                    class="" :error="isFieldValid('academico')" :error-message="getFieldError('academico')">
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
			default : 'escala_t',
		},
		routeName : {
			type : String,
			default : 'escala_tadd',
		},
		apiPath : {
			type : String,
			default : 'escala_t/add',
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
		costo_mensual: "", 
		haberbasico: "", 
		ageneral: "", 
		mgeneral: "", 
		aespecifica: "", 
		mespecifica: "", 
		normativa_codigo: "", 
		normativa_anyo: "", 
		numero_items: "", 
		nivel: "", 
		entidad: "", 
		financiero: "", 
		organizacion: "", 
		categoria: "", 
		detalle: "", 
		denominacion: "", 
		codgestion: "", 
		habilitado: "", 
		academico: "", 
	};
	
	const formData = reactive({ ...formDefaultValues });
	
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			costo_mensual: { numeric },
		haberbasico: { numeric },
		ageneral: { numeric },
		mgeneral: { numeric },
		aespecifica: { numeric },
		mespecifica: { numeric },
		normativa_codigo: { numeric },
		normativa_anyo: { numeric },
		numero_items: { numeric },
		nivel: { numeric }
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
			app.navigateTo(`/escala_t`);
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
