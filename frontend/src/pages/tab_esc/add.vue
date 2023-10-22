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
                                                    Id T E *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlid_t_e" v-model.trim="formData.id_t_e"  label="Id T E" type="number" placeholder="Escribir Id T E"   step="any"    
                                                    class="" :error="isFieldValid('id_t_e')" :error-message="getFieldError('id_t_e')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nivel Te 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnivel_te" v-model.trim="formData.nivel_te"  label="Nivel Te" type="number" placeholder="Escribir Nivel Te"   step="any"    
                                                    class="" :error="isFieldValid('nivel_te')" :error-message="getFieldError('nivel_te')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nro Item Te 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnro_item_te" v-model.trim="formData.nro_item_te"  label="Nro Item Te" type="number" placeholder="Escribir Nro Item Te"   step="any"    
                                                    class="" :error="isFieldValid('nro_item_te')" :error-message="getFieldError('nro_item_te')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Haber B Te 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlhaber_b_te" v-model.trim="formData.haber_b_te"  label="Haber B Te" type="number" placeholder="Escribir Haber B Te"   step="any"    
                                                    class="" :error="isFieldValid('haber_b_te')" :error-message="getFieldError('haber_b_te')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Categoria Te 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcategoria_te" v-model.trim="formData.categoria_te"  label="Categoria Te" type="text" placeholder="Escribir Categoria Te"      
                                                    class="" :error="isFieldValid('categoria_te')" :error-message="getFieldError('categoria_te')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Denom Te 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldenom_te" v-model.trim="formData.denom_te"  label="Denom Te" type="text" placeholder="Escribir Denom Te"      
                                                    class="" :error="isFieldValid('denom_te')" :error-message="getFieldError('denom_te')">
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
			default : 'tab_esc',
		},
		routeName : {
			type : String,
			default : 'tab_escadd',
		},
		apiPath : {
			type : String,
			default : 'tab_esc/add',
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
		id_t_e: "", 
		nivel_te: "", 
		nro_item_te: "", 
		haber_b_te: "", 
		categoria_te: "", 
		denom_te: "", 
	};
	
	const formData = reactive({ ...formDefaultValues });
	
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			id_t_e: { required, numeric },
		nivel_te: { numeric },
		nro_item_te: { numeric },
		haber_b_te: { numeric }
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
			app.navigateTo(`/tab_esc`);
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
