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
                                                    Frontera 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlfrontera" v-model.trim="formData.frontera"  label="Frontera" type="text" placeholder="Escribir Frontera"      
                                                    class="" :error="isFieldValid('frontera')" :error-message="getFieldError('frontera')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Fingreso 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlfingreso" v-model="formData.fingreso" label="Fingreso"    :error="isFieldValid('fingreso')" :error-message="getFieldError('fingreso')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlfingreso" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.fingreso" @input="$refs.ctrlfingreso.hide()" />
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
                                                    Autovac 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlautovac" v-model.trim="formData.autovac"  label="Autovac" type="text" placeholder="Escribir Autovac"      
                                                    class="" :error="isFieldValid('autovac')" :error-message="getFieldError('autovac')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Cbancaria 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcbancaria" v-model.trim="formData.cbancaria"  label="Cbancaria" type="number" placeholder="Escribir Cbancaria"   step="any"    
                                                    class="" :error="isFieldValid('cbancaria')" :error-message="getFieldError('cbancaria')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nativo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnativo" v-model.trim="formData.nativo"  label="Nativo" type="text" placeholder="Escribir Nativo"      
                                                    class="" :error="isFieldValid('nativo')" :error-message="getFieldError('nativo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Visible 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlvisible" v-model.trim="formData.visible"  label="Visible" type="text" placeholder="Escribir Visible"      
                                                    class="" :error="isFieldValid('visible')" :error-message="getFieldError('visible')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Ley1178 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlley1178" v-model.trim="formData.ley1178"  label="Ley1178" type="text" placeholder="Escribir Ley1178"      
                                                    class="" :error="isFieldValid('ley1178')" :error-message="getFieldError('ley1178')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Ppublicas 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlppublicas" v-model.trim="formData.ppublicas"  label="Ppublicas" type="text" placeholder="Escribir Ppublicas"      
                                                    class="" :error="isFieldValid('ppublicas')" :error-message="getFieldError('ppublicas')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Rpfpublica 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlrpfpublica" v-model.trim="formData.rpfpublica"  label="Rpfpublica" type="text" placeholder="Escribir Rpfpublica"      
                                                    class="" :error="isFieldValid('rpfpublica')" :error-message="getFieldError('rpfpublica')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Rejap 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlrejap" v-model.trim="formData.rejap"  label="Rejap" type="text" placeholder="Escribir Rejap"      
                                                    class="" :error="isFieldValid('rejap')" :error-message="getFieldError('rejap')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Frejap 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlfrejap" v-model="formData.frejap" label="Frejap"    :error="isFieldValid('frejap')" :error-message="getFieldError('frejap')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlfrejap" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.frejap" @input="$refs.ctrlfrejap.hide()" />
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
                                                    Sipasse 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlsipasse" v-model.trim="formData.sipasse"  label="Sipasse" type="text" placeholder="Escribir Sipasse"      
                                                    class="" :error="isFieldValid('sipasse')" :error-message="getFieldError('sipasse')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Fsipasse 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlfsipasse" v-model="formData.fsipasse" label="Fsipasse"    :error="isFieldValid('fsipasse')" :error-message="getFieldError('fsipasse')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlfsipasse" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.fsipasse" @input="$refs.ctrlfsipasse.hide()" />
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
                                                    Hojavida 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlhojavida" v-model.trim="formData.hojavida"  label="Hojavida" type="text" placeholder="Escribir Hojavida"      
                                                    class="" :error="isFieldValid('hojavida')" :error-message="getFieldError('hojavida')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Incompatibilidad 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlincompatibilidad" v-model.trim="formData.incompatibilidad"  label="Incompatibilidad" type="text" placeholder="Escribir Incompatibilidad"      
                                                    class="" :error="isFieldValid('incompatibilidad')" :error-message="getFieldError('incompatibilidad')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Cnacimiento 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcnacimiento" v-model.trim="formData.cnacimiento"  label="Cnacimiento" type="text" placeholder="Escribir Cnacimiento"      
                                                    class="" :error="isFieldValid('cnacimiento')" :error-message="getFieldError('cnacimiento')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nua 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnua" v-model.trim="formData.nua"  label="Nua" type="number" placeholder="Escribir Nua"   step="any"    
                                                    class="" :error="isFieldValid('nua')" :error-message="getFieldError('nua')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Afp 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlafp" v-model.trim="formData.afp"  label="Afp" type="text" placeholder="Escribir Afp"      
                                                    class="" :error="isFieldValid('afp')" :error-message="getFieldError('afp')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Glosa 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlglosa" v-model.trim="formData.glosa"  label="Glosa" type="text" placeholder="Escribir Glosa"      
                                                    class="" :error="isFieldValid('glosa')" :error-message="getFieldError('glosa')">
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
			default : 'infouser',
		},
		routeName : {
			type : String,
			default : 'infouseradd',
		},
		apiPath : {
			type : String,
			default : 'infouser/add',
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
		frontera: "", 
		fingreso: new Date(), 
		autovac: "", 
		cbancaria: "", 
		nativo: "", 
		visible: "", 
		ley1178: "", 
		ppublicas: "", 
		rpfpublica: "", 
		rejap: "", 
		frejap: new Date(), 
		sipasse: "", 
		fsipasse: new Date(), 
		hojavida: "", 
		incompatibilidad: "", 
		cnacimiento: "", 
		nua: "", 
		afp: "", 
		glosa: "", 
		codusuario: "", 
	};
	
	const formData = reactive({ ...formDefaultValues });
	
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			cbancaria: { numeric },
		nua: { numeric }
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
			app.navigateTo(`/infouser`);
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
