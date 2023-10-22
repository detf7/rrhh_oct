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
                                                    Telefono 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltelefono" v-model.trim="formData.telefono"  label="Telefono" type="number" placeholder="Escribir Telefono"   step="any"    
                                                    class="" :error="isFieldValid('telefono')" :error-message="getFieldError('telefono')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Fnacimiento 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlfnacimiento" v-model="formData.fnacimiento" label="Fnacimiento"    :error="isFieldValid('fnacimiento')" :error-message="getFieldError('fnacimiento')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlfnacimiento" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.fnacimiento" @input="$refs.ctrlfnacimiento.hide()" />
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
                                                    Correo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcorreo" v-model.trim="formData.correo"  label="Correo" type="text" placeholder="Escribir Correo"      
                                                    class="" :error="isFieldValid('correo')" :error-message="getFieldError('correo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Estcivil 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlestcivil" v-model.trim="formData.estcivil"  label="Estcivil" type="text" placeholder="Escribir Estcivil"      
                                                    class="" :error="isFieldValid('estcivil')" :error-message="getFieldError('estcivil')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Direccion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldireccion" v-model.trim="formData.direccion"  label="Direccion" type="text" placeholder="Escribir Direccion"      
                                                    class="" :error="isFieldValid('direccion')" :error-message="getFieldError('direccion')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Genero 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlgenero" v-model.trim="formData.genero"  label="Genero" type="text" placeholder="Escribir Genero"      
                                                    class="" :error="isFieldValid('genero')" :error-message="getFieldError('genero')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Militar 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlmilitar" v-model.trim="formData.militar"  label="Militar" type="text" placeholder="Escribir Militar"      
                                                    class="" :error="isFieldValid('militar')" :error-message="getFieldError('militar')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Fotografia 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlfotografia" v-model.trim="formData.fotografia"  label="Fotografia" type="text" placeholder="Escribir Fotografia"      
                                                    class="" :error="isFieldValid('fotografia')" :error-message="getFieldError('fotografia')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Archivo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlarchivo" v-model.trim="formData.archivo"  label="Archivo" type="text" placeholder="Escribir Archivo"      
                                                    class="" :error="isFieldValid('archivo')" :error-message="getFieldError('archivo')">
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
                                                    <api-data-source @loaded="response => mapOptionField(response, 'codusuario')"  api-path="components_data/codusuario_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlcodusuario" emit-value map-options  v-model="formData.codusuario" :options="req.response" label="Codusuario"  :error="isFieldValid('codusuario')" :error-message="getFieldError('codusuario')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nacionalidad 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnacionalidad" v-model.trim="formData.nacionalidad"  label="Nacionalidad" type="text" placeholder="Escribir Nacionalidad"      
                                                    class="" :error="isFieldValid('nacionalidad')" :error-message="getFieldError('nacionalidad')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Ciudad 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlciudad" v-model.trim="formData.ciudad"  label="Ciudad" type="text" placeholder="Escribir Ciudad"      
                                                    class="" :error="isFieldValid('ciudad')" :error-message="getFieldError('ciudad')">
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
			default : 'hojavida',
		},
		routeName : {
			type : String,
			default : 'hojavidaadd',
		},
		apiPath : {
			type : String,
			default : 'hojavida/add',
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
		telefono: "", 
		fnacimiento: new Date(), 
		correo: "", 
		estcivil: "", 
		direccion: "", 
		genero: "", 
		militar: "", 
		fotografia: "", 
		archivo: "", 
		codusuario: "", 
		nacionalidad: "", 
		ciudad: "", 
	};
	
	const formData = reactive({ ...formDefaultValues });
	
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			telefono: { numeric }
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
			app.navigateTo(`/hojavida`);
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
