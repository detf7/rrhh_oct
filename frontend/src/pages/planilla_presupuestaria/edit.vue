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
                                                    Fuente 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'fuente')"  api-path="components_data/fuente_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlfuente" emit-value map-options  v-model="formData.fuente" :options="req.response" label="Fuente"  :error="isFieldValid('fuente')" :error-message="getFieldError('fuente')">
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
                                                    Cantidad de Items 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcantidad_items" v-model.trim="formData.cantidad_items"  label="Cantidad de Items" type="number" placeholder="Cantidad"   step="any"    
                                                    class="" :error="isFieldValid('cantidad_items')" :error-message="getFieldError('cantidad_items')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Haber Basico 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlhaber_basico" v-model.trim="formData.haber_basico"  label="Haber Basico" type="number" placeholder="Escribir Haber Basico"   step="0.1"  readonly  
                                                    class="" :error="isFieldValid('haber_basico')" :error-message="getFieldError('haber_basico')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Denominacion Cargo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="formData.denominacion_cargo = ''" :load-on-mount="false" :api-path="`components_data/denominacion_cargo_option_list?lookup_haber_basico=${formData.haber_basico}`"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrldenominacion_cargo" emit-value map-options  v-model="formData.denominacion_cargo" :options="req.response" label="Denominacion Cargo"  :error="isFieldValid('denominacion_cargo')" :error-message="getFieldError('denominacion_cargo')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Descripción del puesto 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrldescrip_puesto" rows="2"  v-model="formData.descrip_puesto" placeholder="Ingresar descripción literal"    type="textarea" :error="isFieldValid('descrip_puesto')" :error-message="getFieldError('descrip_puesto')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Unidad Organiz 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'unidad_organiz')"  api-path="components_data/unidad_organiz_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlunidad_organiz" emit-value map-options  v-model="formData.unidad_organiz" :options="req.response" label="Unidad Organiz"  :error="isFieldValid('unidad_organiz')" :error-message="getFieldError('unidad_organiz')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Clasificacion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-select       ref="ctrlclasificacion" emit-value map-options  v-model="formData.clasificacion" :options="app.menus.clasificacionItems" label="Clasificacion"  :error="isFieldValid('clasificacion')" :error-message="getFieldError('clasificacion')">
                                                    </q-select> 
                                                </div>
                                            </div>
                                        </div>
                                        <input name="ctrlidplanillapres"  ref="ctrlidplanillapres" v-model="formData.idplanillapres" type="hidden" />
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
			default: 'planilla_presupuestaria',
		},
		routeName: {
			type: String,
			default: 'planilla_presupuestariaedit',
		},
		pagePath: {
			type : String,
			default : 'planilla_presupuestaria/edit',
		},
		apiPath: {
			type: String,
			default: 'planilla_presupuestaria/edit',
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
		fuente: "", 
		nivel: "", 
		cantidad_items: "", 
		haber_basico: "", 
		denominacion_cargo: "", 
		descrip_puesto: "", 
		unidad_organiz: "", 
		clasificacion: "", 
		idplanillapres: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/planilla_presupuestaria`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			fuente: { numeric },
		nivel: { numeric },
		cantidad_items: { numeric },
		haber_basico: { numeric },
		idplanillapres: { required }
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
