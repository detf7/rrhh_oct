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
                                    Editar
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
                                <q-card  :flat="isSubPage" class="q-pa-md nice-shadow-16">
                                    <q-form ref="observer"  @submit.prevent="submitForm()">
                                    <!--[form-content-start]-->
                                    <div class="row q-col-gutter-x-md">
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Valacademico 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlvalacademico" v-model.trim="formData.valacademico"  label="Valacademico" type="text" placeholder="Escribir Valacademico"      
                                                    class="" :error="isFieldValid('valacademico')" :error-message="getFieldError('valacademico')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Valespecifica 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlvalespecifica" v-model.trim="formData.valespecifica"  label="Valespecifica" type="text" placeholder="Escribir Valespecifica"      
                                                    class="" :error="isFieldValid('valespecifica')" :error-message="getFieldError('valespecifica')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Valgeneral 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlvalgeneral" v-model.trim="formData.valgeneral"  label="Valgeneral" type="text" placeholder="Escribir Valgeneral"      
                                                    class="" :error="isFieldValid('valgeneral')" :error-message="getFieldError('valgeneral')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Resultado 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlresultado" v-model.trim="formData.resultado"  label="Resultado" type="text" placeholder="Escribir Resultado"      
                                                    class="" :error="isFieldValid('resultado')" :error-message="getFieldError('resultado')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Detespecifica 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldetespecifica" v-model.trim="formData.detespecifica"  label="Detespecifica" type="text" placeholder="Escribir Detespecifica"      
                                                    class="" :error="isFieldValid('detespecifica')" :error-message="getFieldError('detespecifica')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Detgeneral 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldetgeneral" v-model.trim="formData.detgeneral"  label="Detgeneral" type="text" placeholder="Escribir Detgeneral"      
                                                    class="" :error="isFieldValid('detgeneral')" :error-message="getFieldError('detgeneral')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Idevaluacion *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlidevaluacion" v-model.trim="formData.idevaluacion"  label="Idevaluacion" type="text" placeholder="Escribir Idevaluacion"      
                                                    class="" :error="isFieldValid('idevaluacion')" :error-message="getFieldError('idevaluacion')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Observacion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlobservacion" v-model.trim="formData.observacion"  label="Observacion" type="text" placeholder="Escribir Observacion"      
                                                    class="" :error="isFieldValid('observacion')" :error-message="getFieldError('observacion')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--[form-content-end]-->
                                    <div v-if="showSubmitButton" class="text-center q-my-md">
                                        <q-btn    :rounded="false"  color="primary"  no-caps  unelevated   type="submit" icon-right="send" :loading="saving">
                                            {{ submitButtonLabel }}
                                            <template v-slot:loading>
                                                <q-spinner-oval />
                                            </template>
                                        </q-btn>
                                    </div>
                                    </q-form>
                                    <slot :submit="submitForm" :saving="saving"></slot>
                                </q-card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>
        <template v-if="loading">
            <div style="min-height:200px" class="q-pa-sm text-center relative-position">
                <q-inner-loading color="primary" label="Cargando..." showing></q-inner-loading>
            </div>
        </template>
    </main>
</template>
<script setup>
	import {  computed, ref, reactive, toRefs, onMounted } from 'vue';
	import { required, } from 'src/services/validators';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useEditPage } from 'src/composables/editpage';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		id: [String, Number],
		pageName: {
			type: String,
			default: 'evaluacion',
		},
		routeName: {
			type: String,
			default: 'evaluacionedit',
		},
		pagePath: {
			type : String,
			default : 'evaluacion/edit',
		},
		apiPath: {
			type: String,
			default: 'evaluacion/edit',
		},
		submitButtonLabel: {
			type: String,
			default: "Actualizar",
		},
		msgTitle: {
			type: String,
			default: "Actualizar registro",
		},
		msgBeforeSave: {
			type: String,
			default: "",
		},
		msgAfterSave: {
			type: String,
			default: "Registro actualizado con éxito",
		},
		formValidationError: {
			type: String,
			default: "El formulario no es válido",
		},
		formValidationMsg: {
			type: String,
			default: "Por favor complete el formulario",
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
	});
	
	const store = usePageStore(props.pageName);
	const app = useApp();
	
	const formDefaultValues = Object.assign({
		valacademico: "", 
		valespecifica: "", 
		valgeneral: "", 
		resultado: "", 
		detespecifica: "", 
		detgeneral: "", 
		idevaluacion: "", 
		observacion: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/evaluacion`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			idevaluacion: { required }
		}
	});
	
	const page = useEditPage({ store, props, formData, rules, afterSubmit });
	
	const {  saving, loading, pageReady,   } = toRefs(page.state);
	
	const {  currentRecord: editRecord } = toRefs(store.state);
	
	const { load, submitForm, isFieldValid, getFieldError,  } = page.methods;
	
	useMeta(() => {
		return {
			//set browser title
			title: "Editar"
		}
	});
	onMounted(()=>{
		load();
	});
</script>
<style scoped>
</style>
