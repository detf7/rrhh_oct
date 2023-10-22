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
                                                    Iddeclaracion *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'iddeclaracion')"  api-path="components_data/iddeclaracion_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrliddeclaracion" emit-value map-options  v-model="formData.iddeclaracion" :options="req.response" label="Iddeclaracion"  :error="isFieldValid('iddeclaracion')" :error-message="getFieldError('iddeclaracion')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Fecha Creacion *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlfecha_creacion" v-model="formData.fecha_creacion" label="Fecha Creacion"    :error="isFieldValid('fecha_creacion')" :error-message="getFieldError('fecha_creacion')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlfecha_creacion" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.fecha_creacion" @input="$refs.ctrlfecha_creacion.hide()" />
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
                                                    Fecha Modificacion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlfecha_modificacion" v-model="formData.fecha_modificacion" label="Fecha Modificacion"    :error="isFieldValid('fecha_modificacion')" :error-message="getFieldError('fecha_modificacion')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlfecha_modificacion" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.fecha_modificacion" @input="$refs.ctrlfecha_modificacion.hide()" />
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
                                                    Fecha Eliminacion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlfecha_eliminacion" v-model="formData.fecha_eliminacion" label="Fecha Eliminacion"    :error="isFieldValid('fecha_eliminacion')" :error-message="getFieldError('fecha_eliminacion')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlfecha_eliminacion" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.fecha_eliminacion" @input="$refs.ctrlfecha_eliminacion.hide()" />
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
                                                    Usuario Creacion *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlusuario_creacion" v-model.trim="formData.usuario_creacion"  label="Usuario Creacion" type="text" placeholder="Escribir Usuario Creacion"      
                                                    class="" :error="isFieldValid('usuario_creacion')" :error-message="getFieldError('usuario_creacion')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Usuario Modificacion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlusuario_modificacion" v-model.trim="formData.usuario_modificacion"  label="Usuario Modificacion" type="text" placeholder="Escribir Usuario Modificacion"      
                                                    class="" :error="isFieldValid('usuario_modificacion')" :error-message="getFieldError('usuario_modificacion')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Usuario Eliminacion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlusuario_eliminacion" v-model.trim="formData.usuario_eliminacion"  label="Usuario Eliminacion" type="text" placeholder="Escribir Usuario Eliminacion"      
                                                    class="" :error="isFieldValid('usuario_eliminacion')" :error-message="getFieldError('usuario_eliminacion')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Coddeclaracion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcoddeclaracion" v-model.trim="formData.coddeclaracion"  label="Coddeclaracion" type="text" placeholder="Escribir Coddeclaracion"      
                                                    class="" :error="isFieldValid('coddeclaracion')" :error-message="getFieldError('coddeclaracion')">
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
                                                    <q-input   ref="ctrlcodusuario" v-model.trim="formData.codusuario"  label="Codusuario" type="text" placeholder="Escribir Codusuario"      
                                                    class="" :error="isFieldValid('codusuario')" :error-message="getFieldError('codusuario')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Respuesta 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlrespuesta" v-model.trim="formData.respuesta"  label="Respuesta" type="text" placeholder="Escribir Respuesta"      
                                                    class="" :error="isFieldValid('respuesta')" :error-message="getFieldError('respuesta')">
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
	import { required, numeric, } from 'src/services/validators';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useEditPage } from 'src/composables/editpage';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		id: [String, Number],
		pageName: {
			type: String,
			default: 'declaracion_pregunta_usuario',
		},
		routeName: {
			type: String,
			default: 'declaracion_pregunta_usuarioedit',
		},
		pagePath: {
			type : String,
			default : 'declaracion_pregunta_usuario/edit',
		},
		apiPath: {
			type: String,
			default: 'declaracion_pregunta_usuario/edit',
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
		iddeclaracion: "", 
		fecha_creacion: new Date(), 
		fecha_modificacion: new Date(), 
		fecha_eliminacion: new Date(), 
		usuario_creacion: "", 
		usuario_modificacion: "", 
		usuario_eliminacion: "", 
		coddeclaracion: "", 
		codusuario: "", 
		respuesta: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/declaracion_pregunta_usuario`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			iddeclaracion: { required, numeric },
		fecha_creacion: { required },
		usuario_creacion: { required }
		}
	});
	
	const page = useEditPage({ store, props, formData, rules, afterSubmit });
	
	const {  saving, loading, pageReady,   } = toRefs(page.state);
	
	const {  currentRecord: editRecord } = toRefs(store.state);
	
	const { load, submitForm, isFieldValid, getFieldError, mapOptionField, } = page.methods;
	
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
