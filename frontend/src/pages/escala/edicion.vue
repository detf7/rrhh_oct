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
                                                    Habilitado 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-field  borderless   :error="isFieldValid('habilitado')" :error-message="getFieldError('habilitado')">
                                                    <q-option-group  ref="ctrlhabilitado" v-model="formData.habilitado" :options="app.menus.habilitadoItems"  inline size="md" ></q-option-group>
                                                    </q-field>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Normativa Codigo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnormativa_codigo" v-model.trim="formData.normativa_codigo"  label="Normativa Codigo" type="number" placeholder="Escribir Normativa Codigo"   step="any"  readonly  
                                                    class="" :error="isFieldValid('normativa_codigo')" :error-message="getFieldError('normativa_codigo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Normativa Anyo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnormativa_anyo" v-model.trim="formData.normativa_anyo"  label="Normativa Anyo" type="number" placeholder="Escribir Normativa Anyo"   step="any"  readonly  
                                                    class="" :error="isFieldValid('normativa_anyo')" :error-message="getFieldError('normativa_anyo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Fuente 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source   api-path="components_data/financiero_option_list"  v-slot="req">
                                                        <q-field  borderless   :error="isFieldValid('financiero')" :error-message="getFieldError('financiero')">
                                                        <q-option-group  ref="ctrlfinanciero" v-model="formData.financiero" :options="req.response"   size="md" ></q-option-group>
                                                        </q-field>
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Categoria 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'categoria')"  api-path="components_data/categoria_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlcategoria" emit-value map-options  v-model="formData.categoria" :options="req.response" label="Categoria"  :error="isFieldValid('categoria')" :error-message="getFieldError('categoria')">
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
                                                    <api-data-source @loaded="response => mapOptionField(response, 'nivel')"  api-path="components_data/nivel_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlnivel" emit-value map-options  v-model="formData.nivel" :options="req.response" label="Nivel"  :error="isFieldValid('nivel')" :error-message="getFieldError('nivel')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Denominacion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="formData.denominacion = ''" :load-on-mount="false" :api-path="`components_data/denominacion_option_list?lookup_nivel=${formData.nivel}`"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrldenominacion" emit-value map-options  v-model="formData.denominacion" :options="req.response" label="Denominacion"  :error="isFieldValid('denominacion')" :error-message="getFieldError('denominacion')">
                                                        </q-select> 
                                                    </api-data-source>
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
                                                    Haberbasico 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-select       ref="ctrlhaberbasico" emit-value map-options  v-model="formData.haberbasico" :options="app.menus.haberbasicoItems" label="Haberbasico"  :error="isFieldValid('haberbasico')" :error-message="getFieldError('haberbasico')">
                                                    </q-select> 
                                                </div>
                                            </div>
                                        </div>
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
			default: 'escala',
		},
		routeName: {
			type: String,
			default: 'escalaedicion',
		},
		pagePath: {
			type : String,
			default : 'escala/edicion',
		},
		apiPath: {
			type: String,
			default: 'escala/edicion',
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
		habilitado: "", 
		normativa_codigo: "", 
		normativa_anyo: "", 
		financiero: "", 
		categoria: "", 
		nivel: "", 
		denominacion: "", 
		numero_items: "", 
		haberbasico: "", 
		costo_mensual: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			// if page is open as dialog, close dialog
			app.closeDialogs();
		}
		else if(props.redirect) {
			app.navigateTo(`/`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			normativa_codigo: { numeric },
		normativa_anyo: { numeric },
		nivel: { numeric },
		numero_items: { numeric },
		haberbasico: { numeric },
		costo_mensual: { numeric }
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
