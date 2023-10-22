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
                                                    Feccumple *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlfeccumple" v-model.trim="formData.feccumple"  label="Feccumple" type="number" placeholder="Escribir Feccumple"   step="any"    
                                                    class="" :error="isFieldValid('feccumple')" :error-message="getFieldError('feccumple')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Vacaciones *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlvacaciones" v-model.trim="formData.vacaciones"  label="Vacaciones" type="number" placeholder="Escribir Vacaciones"   step="any"    
                                                    class="" :error="isFieldValid('vacaciones')" :error-message="getFieldError('vacaciones')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Cviajes *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcviajes" v-model.trim="formData.cviajes"  label="Cviajes" type="number" placeholder="Escribir Cviajes"   step="any"    
                                                    class="" :error="isFieldValid('cviajes')" :error-message="getFieldError('cviajes')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Bmedicas *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlbmedicas" v-model.trim="formData.bmedicas"  label="Bmedicas" type="number" placeholder="Escribir Bmedicas"   step="any"    
                                                    class="" :error="isFieldValid('bmedicas')" :error-message="getFieldError('bmedicas')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Singocehaber *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlsingocehaber" v-model.trim="formData.singocehaber"  label="Singocehaber" type="number" placeholder="Escribir Singocehaber"   step="any"    
                                                    class="" :error="isFieldValid('singocehaber')" :error-message="getFieldError('singocehaber')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Fecha Reporte *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlfecha_reporte" v-model="formData.fecha_reporte" label="Fecha Reporte"    :error="isFieldValid('fecha_reporte')" :error-message="getFieldError('fecha_reporte')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlfecha_reporte" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.fecha_reporte" @input="$refs.ctrlfecha_reporte.hide()" />
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
                                                    Falta *
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
                                                    Abandono *
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
                                                    Atraso *
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
                                                    Clave *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlclave" v-model.trim="formData.clave"  label="Clave" type="text" placeholder="Escribir Clave"      
                                                    class="" :error="isFieldValid('clave')" :error-message="getFieldError('clave')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Usuario Reporte *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlusuario_reporte" v-model.trim="formData.usuario_reporte"  label="Usuario Reporte" type="text" placeholder="Escribir Usuario Reporte"      
                                                    class="" :error="isFieldValid('usuario_reporte')" :error-message="getFieldError('usuario_reporte')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Fecha Reporte Cadena *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlfecha_reporte_cadena" v-model.trim="formData.fecha_reporte_cadena"  label="Fecha Reporte Cadena" type="text" placeholder="Escribir Fecha Reporte Cadena"      
                                                    class="" :error="isFieldValid('fecha_reporte_cadena')" :error-message="getFieldError('fecha_reporte_cadena')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Documento Identidad *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldocumento_identidad" v-model.trim="formData.documento_identidad"  label="Documento Identidad" type="text" placeholder="Escribir Documento Identidad"      
                                                    class="" :error="isFieldValid('documento_identidad')" :error-message="getFieldError('documento_identidad')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nombre Completo *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnombre_completo" v-model.trim="formData.nombre_completo"  label="Nombre Completo" type="text" placeholder="Escribir Nombre Completo"      
                                                    class="" :error="isFieldValid('nombre_completo')" :error-message="getFieldError('nombre_completo')">
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
			default: 'log_reportes',
		},
		routeName: {
			type: String,
			default: 'log_reportesedit',
		},
		pagePath: {
			type : String,
			default : 'log_reportes/edit',
		},
		apiPath: {
			type: String,
			default: 'log_reportes/edit',
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
		feccumple: "", 
		vacaciones: "", 
		cviajes: "", 
		bmedicas: "", 
		singocehaber: "", 
		fecha_reporte: new Date(), 
		falta: "", 
		abandono: "", 
		atraso: "", 
		clave: "", 
		usuario_reporte: "", 
		fecha_reporte_cadena: "", 
		documento_identidad: "", 
		nombre_completo: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/log_reportes`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			feccumple: { required, numeric },
		vacaciones: { required, numeric },
		cviajes: { required, numeric },
		bmedicas: { required, numeric },
		singocehaber: { required, numeric },
		fecha_reporte: { required },
		falta: { required, numeric },
		abandono: { required, numeric },
		atraso: { required, numeric },
		clave: { required },
		usuario_reporte: { required },
		fecha_reporte_cadena: { required },
		documento_identidad: { required },
		nombre_completo: { required }
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
