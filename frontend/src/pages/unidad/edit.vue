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
                                                    Dependencia 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'dependencia')"  api-path="components_data/codunidad_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrldependencia" emit-value map-options  v-model="formData.dependencia" :options="req.response" label="Dependencia"  :error="isFieldValid('dependencia')" :error-message="getFieldError('dependencia')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Codentidad 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'codentidad')"  api-path="components_data/dependencia_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlcodentidad" emit-value map-options  v-model="formData.codentidad" :options="req.response" label="Codentidad"  :error="isFieldValid('codentidad')" :error-message="getFieldError('codentidad')">
                                                        </q-select> 
                                                    </api-data-source>
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
                                                    Soa 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlsoa" v-model.trim="formData.soa"  label="Soa" type="text" placeholder="Escribir Soa"      
                                                    class="" :error="isFieldValid('soa')" :error-message="getFieldError('soa')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Sigla 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlsigla" v-model.trim="formData.sigla"  label="Sigla" type="text" placeholder="Escribir Sigla"      
                                                    class="" :error="isFieldValid('sigla')" :error-message="getFieldError('sigla')">
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
			default: 'unidad',
		},
		routeName: {
			type: String,
			default: 'unidadedit',
		},
		pagePath: {
			type : String,
			default : 'unidad/edit',
		},
		apiPath: {
			type: String,
			default: 'unidad/edit',
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
		codalmacen: "", 
		dependencia: "", 
		codentidad: "", 
		nivel: "", 
		detalle: "", 
		soa: "", 
		sigla: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/unidad`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			codalmacen: { numeric },
		dependencia: { numeric },
		codentidad: { numeric },
		nivel: { numeric }
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
