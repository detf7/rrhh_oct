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
                                <div class="row q-col-gutter-x-md ">
                                    <div class="col">
                                        <q-card  :flat="isSubPage" class="q-pa-md nice-shadow-16">
                                            <q-form ref="observer"  @submit.prevent="submitForm()">
                                            <!--[form-content-start]-->
                                            <div class="row q-col-gutter-x-md">
                                                <div class="col-12">
                                                    <div class="row">
                                                        <div class="col-sm-3 col-12">
                                                            Fechaini 
                                                        </div>
                                                        <div class="col-sm-9 col-12">
                                                            <q-input  ref="ctrlfechaini" v-model="formData.fechaini" label="Fechaini"    :error="isFieldValid('fechaini')" :error-message="getFieldError('fechaini')">
                                                            <template v-slot:append>
                                                                <q-icon name="date_range" class="cursor-pointer">
                                                                <q-popup-proxy ref="ctrlfechaini" transition-show="scale" transition-hide="scale">
                                                                <q-date    mask="YYYY-MM-DD" v-model="formData.fechaini" @input="$refs.ctrlfechaini.hide()" />
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
                                                            Fechafin 
                                                        </div>
                                                        <div class="col-sm-9 col-12">
                                                            <q-input  ref="ctrlfechafin" v-model="formData.fechafin" label="Fechafin"    :error="isFieldValid('fechafin')" :error-message="getFieldError('fechafin')">
                                                            <template v-slot:append>
                                                                <q-icon name="date_range" class="cursor-pointer">
                                                                <q-popup-proxy ref="ctrlfechafin" transition-show="scale" transition-hide="scale">
                                                                <q-date    mask="YYYY-MM-DD" v-model="formData.fechafin" @input="$refs.ctrlfechafin.hide()" />
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
                                                            Fechabaja 
                                                        </div>
                                                        <div class="col-sm-9 col-12">
                                                            <q-input  ref="ctrlfechabaja" v-model="formData.fechabaja" label="Fechabaja"    :error="isFieldValid('fechabaja')" :error-message="getFieldError('fechabaja')">
                                                            <template v-slot:append>
                                                                <q-icon name="date_range" class="cursor-pointer">
                                                                <q-popup-proxy ref="ctrlfechabaja" transition-show="scale" transition-hide="scale">
                                                                <q-date    mask="YYYY-MM-DD" v-model="formData.fechabaja" @input="$refs.ctrlfechabaja.hide()" />
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
                                                            Vigente 
                                                        </div>
                                                        <div class="col-sm-9 col-12">
                                                            <q-input   ref="ctrlvigente" v-model.trim="formData.vigente"  label="Vigente" type="text" placeholder="Escribir Vigente"      
                                                            class="" :error="isFieldValid('vigente')" :error-message="getFieldError('vigente')">
                                                            </q-input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="row">
                                                        <div class="col-sm-3 col-12">
                                                            Fecha 
                                                        </div>
                                                        <div class="col-sm-9 col-12">
                                                            <q-input  ref="ctrlfecha" v-model="formData.fecha" label="Fecha"    :error="isFieldValid('fecha')" :error-message="getFieldError('fecha')">
                                                            <template v-slot:append>
                                                                <q-icon name="date_range" class="cursor-pointer">
                                                                <q-popup-proxy ref="ctrlfecha" transition-show="scale" transition-hide="scale">
                                                                <q-date    mask="YYYY-MM-DD" v-model="formData.fecha" @input="$refs.ctrlfecha.hide()" />
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
                                                            Pagovac 
                                                        </div>
                                                        <div class="col-sm-9 col-12">
                                                            <q-input   ref="ctrlpagovac" v-model.trim="formData.pagovac"  label="Pagovac" type="text" placeholder="Escribir Pagovac"      
                                                            class="" :error="isFieldValid('pagovac')" :error-message="getFieldError('pagovac')">
                                                            </q-input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="row">
                                                        <div class="col-sm-3 col-12">
                                                            Codunidad 
                                                        </div>
                                                        <div class="col-sm-9 col-12">
                                                            <api-data-source @loaded="response => mapOptionField(response, 'codunidad')"  api-path="components_data/codunidad_option_list"  v-slot="req">
                                                                <q-select    :loading="req.loading"   ref="ctrlcodunidad" emit-value map-options  v-model="formData.codunidad" :options="req.response" label="Codunidad"  :error="isFieldValid('codunidad')" :error-message="getFieldError('codunidad')">
                                                                </q-select> 
                                                            </api-data-source>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="row">
                                                        <div class="col-sm-3 col-12">
                                                            Coddetesc 
                                                        </div>
                                                        <div class="col-sm-9 col-12">
                                                            <api-data-source @loaded="response => mapOptionField(response, 'coddetesc')"  api-path="components_data/coddetesc_option_list"  v-slot="req">
                                                                <q-select    :loading="req.loading"   ref="ctrlcoddetesc" emit-value map-options  v-model="formData.coddetesc" :options="req.response" label="Coddetesc"  :error="isFieldValid('coddetesc')" :error-message="getFieldError('coddetesc')">
                                                                </q-select> 
                                                            </api-data-source>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="row">
                                                        <div class="col-sm-3 col-12">
                                                            Codpermanente 
                                                        </div>
                                                        <div class="col-sm-9 col-12">
                                                            <api-data-source @loaded="response => mapOptionField(response, 'codpermanente')"  api-path="components_data/codpermanente_option_list"  v-slot="req">
                                                                <q-select    :loading="req.loading"   ref="ctrlcodpermanente" emit-value map-options  v-model="formData.codpermanente" :options="req.response" label="Codpermanente"  :error="isFieldValid('codpermanente')" :error-message="getFieldError('codpermanente')">
                                                                </q-select> 
                                                            </api-data-source>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="row">
                                                        <div class="col-sm-3 col-12">
                                                            Tipo 
                                                        </div>
                                                        <div class="col-sm-9 col-12">
                                                            <q-input   ref="ctrltipo" v-model.trim="formData.tipo"  label="Tipo" type="text" placeholder="Escribir Tipo"      
                                                            class="" :error="isFieldValid('tipo')" :error-message="getFieldError('tipo')">
                                                            </q-input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="row">
                                                        <div class="col-sm-3 col-12">
                                                            Memorandum 
                                                        </div>
                                                        <div class="col-sm-9 col-12">
                                                            <q-input   ref="ctrlmemorandum" v-model.trim="formData.memorandum"  label="Memorandum" type="text" placeholder="Escribir Memorandum"      
                                                            class="" :error="isFieldValid('memorandum')" :error-message="getFieldError('memorandum')">
                                                            </q-input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="row">
                                                        <div class="col-sm-3 col-12">
                                                            Motivo 
                                                        </div>
                                                        <div class="col-sm-9 col-12">
                                                            <q-input   ref="ctrlmotivo" v-model.trim="formData.motivo"  label="Motivo" type="text" placeholder="Escribir Motivo"      
                                                            class="" :error="isFieldValid('motivo')" :error-message="getFieldError('motivo')">
                                                            </q-input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="row">
                                                        <div class="col-sm-3 col-12">
                                                            Codevaluacion 
                                                        </div>
                                                        <div class="col-sm-9 col-12">
                                                            <api-data-source @loaded="response => mapOptionField(response, 'codevaluacion')"  api-path="components_data/codevaluacion_option_list"  v-slot="req">
                                                                <q-select    :loading="req.loading"   ref="ctrlcodevaluacion" emit-value map-options  v-model="formData.codevaluacion" :options="req.response" label="Codevaluacion"  :error="isFieldValid('codevaluacion')" :error-message="getFieldError('codevaluacion')">
                                                                </q-select> 
                                                            </api-data-source>
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
                                                <div class="col-12">
                                                    <div class="row">
                                                        <div class="col-sm-3 col-12">
                                                            Cargopla 
                                                        </div>
                                                        <div class="col-sm-9 col-12">
                                                            <q-input   ref="ctrlcargopla" v-model.trim="formData.cargopla"  label="Cargopla" type="text" placeholder="Escribir Cargopla"      
                                                            class="" :error="isFieldValid('cargopla')" :error-message="getFieldError('cargopla')">
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
                                    <!-- Detal Page Column -->
                                    <div class="col-12" v-if="currentRecord && !isSubPage">
                                        <q-card  :flat="isSubPage" class="q-my-md nice-shadow-16">
                                            <component :is="masterDetailPage" :scroll-into-view="false"></component>
                                        </q-card>
                                    </div>
                                </div>
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
			default: 'permanente',
		},
		routeName: {
			type: String,
			default: 'permanenteedit',
		},
		pagePath: {
			type : String,
			default : 'permanente/edit',
		},
		apiPath: {
			type: String,
			default: 'permanente/edit',
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
		fechaini: new Date(), 
		fechafin: new Date(), 
		fechabaja: new Date(), 
		vigente: "", 
		fecha: new Date(), 
		pagovac: "", 
		codunidad: "", 
		coddetesc: "", 
		codpermanente: "", 
		tipo: "", 
		memorandum: "", 
		motivo: "", 
		codevaluacion: "", 
		glosa: "", 
		codusuario: "", 
		cargopla: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/permanente`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			codunidad: { numeric },
		coddetesc: { numeric },
		codpermanente: { numeric }
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
