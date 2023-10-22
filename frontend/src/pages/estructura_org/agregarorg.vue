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
                                                    Nivel 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-select       ref="ctrlnivel" emit-value map-options  v-model="formData.nivel" :options="app.menus.nivelItems" label="Nivel"  :error="isFieldValid('nivel')" :error-message="getFieldError('nivel')">
                                                    </q-select> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nombre Entidad *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldescripcion" v-model.trim="formData.descripcion"  label="Nombre Entidad" type="text" placeholder="Escribir Nombre Entidad"   list="descripcion_list"    
                                                    class="" :error="isFieldValid('descripcion')" :error-message="getFieldError('descripcion')">
                                                    </q-input>
                                                    <api-data-source   api-path="components_data/descripcion_option_list"  v-slot="req">
                                                        <datalist id="descripcion_list">
                                                        <option v-for="(menu, index) in req.response" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Sigla 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlsigla" v-model.trim="formData.sigla"  label="Sigla" type="text" placeholder="Escribir Sigla"   list="sigla_list"    
                                                    class="" :error="isFieldValid('sigla')" :error-message="getFieldError('sigla')">
                                                    </q-input>
                                                    <api-data-source   api-path="components_data/sigla_option_list"  v-slot="req">
                                                        <datalist id="sigla_list">
                                                        <option v-for="(menu, index) in req.response" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Soa 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <check-duplicate error-msg="Not available" v-model="formData.soa" check-path="components_data/estructura_org_soa_exist/" v-slot="checker">
                                                    <q-input   ref="ctrlsoa" @blur="checker.check" :loading="checker.loading" v-model.trim="formData.soa"  label="Soa" type="text" placeholder="Escribir Soa"   list="soa_list"    
                                                    class="" :error="isFieldValid('soa') || checker.alreadyExist" :error-message="getFieldError('soa') || checker.errorMsg">
                                                    </q-input>
                                                    <api-data-source   api-path="components_data/soa_option_list"  v-slot="req">
                                                        <datalist id="soa_list">
                                                        <option v-for="(menu, index) in req.response" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </api-data-source>
                                                    </check-duplicate>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Glosa 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlglosa" rows="2"  v-model="formData.glosa" placeholder="Escribir Glosa"    type="textarea" :error="isFieldValid('glosa')" :error-message="getFieldError('glosa')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Dependencia 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldependencia" v-model.trim="formData.dependencia"  label="Dependencia" type="number" placeholder="Escribir Dependencia"   step="any"    
                                                    class="" :error="isFieldValid('dependencia')" :error-message="getFieldError('dependencia')">
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
			default : 'estructura_org',
		},
		routeName : {
			type : String,
			default : 'estructura_orgagregarorg',
		},
		apiPath : {
			type : String,
			default : 'estructura_org/agregarorg',
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
		nivel: "", 
		descripcion: "", 
		sigla: "", 
		soa: "", 
		glosa: "", 
		dependencia: "", 
	};
	
	const formData = reactive({ ...formDefaultValues });
	
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			nivel: { numeric },
		descripcion: { required },
		dependencia: { numeric }
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
			// if page is open as dialog, close dialog
			app.closeDialogs();
		}
		else if(props.redirect) {
			app.navigateTo(`/`);
		}
	}
	
	const {  saving, pageReady,   } = toRefs(page.state);
	
	const { submitForm, isFieldValid, getFieldError, mapOptionField } = page.methods;
	
	useMeta(() => {
		return {
			//set browser title
			title: "Agregar nueva organización"
		}
	});
	
	// expose page object for other components access
	defineExpose({
		page
	});
</script>
<style scoped>
</style>
