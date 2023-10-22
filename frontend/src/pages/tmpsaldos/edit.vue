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
                                                    Precio 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlprecio" v-model.trim="formData.precio"  label="Precio" type="number" placeholder="Escribir Precio"   step="0.1"    
                                                    class="" :error="isFieldValid('precio')" :error-message="getFieldError('precio')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Inicial 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlinicial" v-model.trim="formData.inicial"  label="Inicial" type="number" placeholder="Escribir Inicial"   step="0.1"    
                                                    class="" :error="isFieldValid('inicial')" :error-message="getFieldError('inicial')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Tinicial 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltinicial" v-model.trim="formData.tinicial"  label="Tinicial" type="number" placeholder="Escribir Tinicial"   step="0.1"    
                                                    class="" :error="isFieldValid('tinicial')" :error-message="getFieldError('tinicial')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Compras 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcompras" v-model.trim="formData.compras"  label="Compras" type="number" placeholder="Escribir Compras"   step="0.1"    
                                                    class="" :error="isFieldValid('compras')" :error-message="getFieldError('compras')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Tcompras 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltcompras" v-model.trim="formData.tcompras"  label="Tcompras" type="number" placeholder="Escribir Tcompras"   step="0.1"    
                                                    class="" :error="isFieldValid('tcompras')" :error-message="getFieldError('tcompras')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Pedidos 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlpedidos" v-model.trim="formData.pedidos"  label="Pedidos" type="number" placeholder="Escribir Pedidos"   step="0.1"    
                                                    class="" :error="isFieldValid('pedidos')" :error-message="getFieldError('pedidos')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Tpedidos 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltpedidos" v-model.trim="formData.tpedidos"  label="Tpedidos" type="number" placeholder="Escribir Tpedidos"   step="0.1"    
                                                    class="" :error="isFieldValid('tpedidos')" :error-message="getFieldError('tpedidos')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Final 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlfinal" v-model.trim="formData.final"  label="Final" type="number" placeholder="Escribir Final"   step="0.1"    
                                                    class="" :error="isFieldValid('final')" :error-message="getFieldError('final')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Tfinal 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltfinal" v-model.trim="formData.tfinal"  label="Tfinal" type="number" placeholder="Escribir Tfinal"   step="0.1"    
                                                    class="" :error="isFieldValid('tfinal')" :error-message="getFieldError('tfinal')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
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
                                                    Codmaterial 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'codmaterial')"  api-path="components_data/codmaterial_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlcodmaterial" emit-value map-options  v-model="formData.codmaterial" :options="req.response" label="Codmaterial"  :error="isFieldValid('codmaterial')" :error-message="getFieldError('codmaterial')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Codgestion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'codgestion')"  api-path="components_data/codgestion_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlcodgestion" emit-value map-options  v-model="formData.codgestion" :options="req.response" label="Codgestion"  :error="isFieldValid('codgestion')" :error-message="getFieldError('codgestion')">
                                                        </q-select> 
                                                    </api-data-source>
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
			default: 'tmpsaldos',
		},
		routeName: {
			type: String,
			default: 'tmpsaldosedit',
		},
		pagePath: {
			type : String,
			default : 'tmpsaldos/edit',
		},
		apiPath: {
			type: String,
			default: 'tmpsaldos/edit',
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
		precio: "", 
		inicial: "", 
		tinicial: "", 
		compras: "", 
		tcompras: "", 
		pedidos: "", 
		tpedidos: "", 
		final: "", 
		tfinal: "", 
		codalmacen: "", 
		codmaterial: "", 
		codgestion: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/tmpsaldos`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			precio: { numeric },
		inicial: { numeric },
		tinicial: { numeric },
		compras: { numeric },
		tcompras: { numeric },
		pedidos: { numeric },
		tpedidos: { numeric },
		final: { numeric },
		tfinal: { numeric },
		codalmacen: { numeric }
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
