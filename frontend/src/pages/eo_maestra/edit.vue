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
                                                    Nro Eo *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnro_eo" v-model.trim="formData.nro_eo"  label="Nro Eo" type="number" placeholder="Escribir Nro Eo"   step="any"    
                                                    class="" :error="isFieldValid('nro_eo')" :error-message="getFieldError('nro_eo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Fecha Reg Eo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlfecha_reg_eo" v-model="formData.fecha_reg_eo" label="Fecha Reg Eo"    :error="isFieldValid('fecha_reg_eo')" :error-message="getFieldError('fecha_reg_eo')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlfecha_reg_eo" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.fecha_reg_eo" @input="$refs.ctrlfecha_reg_eo.hide()" />
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
                                                    Soa Eo *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlsoa_eo" v-model.trim="formData.soa_eo"  label="Soa Eo" type="text" placeholder="Escribir Soa Eo"      
                                                    class="" :error="isFieldValid('soa_eo')" :error-message="getFieldError('soa_eo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Sigla Eo *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlsigla_eo" v-model.trim="formData.sigla_eo"  label="Sigla Eo" type="text" placeholder="Escribir Sigla Eo"      
                                                    class="" :error="isFieldValid('sigla_eo')" :error-message="getFieldError('sigla_eo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Dependencia Eo *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldependencia_eo" v-model.trim="formData.dependencia_eo"  label="Dependencia Eo" type="text" placeholder="Escribir Dependencia Eo"      
                                                    class="" :error="isFieldValid('dependencia_eo')" :error-message="getFieldError('dependencia_eo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Cod Gestion Eo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcod_gestion_eo" v-model.trim="formData.cod_gestion_eo"  label="Cod Gestion Eo" type="text" placeholder="Escribir Cod Gestion Eo"      
                                                    class="" :error="isFieldValid('cod_gestion_eo')" :error-message="getFieldError('cod_gestion_eo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Rm Eo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlrm_eo" v-model.trim="formData.rm_eo"  label="Rm Eo" type="text" placeholder="Escribir Rm Eo"      
                                                    class="" :error="isFieldValid('rm_eo')" :error-message="getFieldError('rm_eo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nivel Eo *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnivel_eo" v-model.trim="formData.nivel_eo"  label="Nivel Eo" type="text" placeholder="Escribir Nivel Eo"      
                                                    class="" :error="isFieldValid('nivel_eo')" :error-message="getFieldError('nivel_eo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Denominacion Eo *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldenominacion_eo" v-model.trim="formData.denominacion_eo"  label="Denominacion Eo" type="text" placeholder="Escribir Denominacion Eo"      
                                                    class="" :error="isFieldValid('denominacion_eo')" :error-message="getFieldError('denominacion_eo')">
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
			default: 'eo_maestra',
		},
		routeName: {
			type: String,
			default: 'eo_maestraedit',
		},
		pagePath: {
			type : String,
			default : 'eo_maestra/edit',
		},
		apiPath: {
			type: String,
			default: 'eo_maestra/edit',
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
		nro_eo: "", 
		fecha_reg_eo: new Date(), 
		soa_eo: "", 
		sigla_eo: "", 
		dependencia_eo: "", 
		cod_gestion_eo: "", 
		rm_eo: "", 
		nivel_eo: "", 
		denominacion_eo: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/eo_maestra`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			nro_eo: { required, numeric },
		soa_eo: { required },
		sigla_eo: { required },
		dependencia_eo: { required },
		nivel_eo: { required },
		denominacion_eo: { required }
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
