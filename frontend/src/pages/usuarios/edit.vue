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
                                                    User Role Id 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'user_role_id')"  api-path="components_data/role_id_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrluser_role_id" emit-value map-options  v-model="formData.user_role_id" :options="req.response" label="User Role Id"  :error="isFieldValid('user_role_id')" :error-message="getFieldError('user_role_id')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Permisos 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlpermisos" v-model.trim="formData.permisos"  label="Permisos" type="text" placeholder="Escribir Permisos"      
                                                    class="" :error="isFieldValid('permisos')" :error-message="getFieldError('permisos')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Editar 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrleditar" v-model.trim="formData.editar"  label="Editar" type="text" placeholder="Escribir Editar"      
                                                    class="" :error="isFieldValid('editar')" :error-message="getFieldError('editar')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Jsonunidad 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrljsonunidad" v-model.trim="formData.jsonunidad"  label="Jsonunidad" type="text" placeholder="Escribir Jsonunidad"      
                                                    class="" :error="isFieldValid('jsonunidad')" :error-message="getFieldError('jsonunidad')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Apmaterno 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlapmaterno" v-model.trim="formData.apmaterno"  label="Apmaterno" type="text" placeholder="Escribir Apmaterno"      
                                                    class="" :error="isFieldValid('apmaterno')" :error-message="getFieldError('apmaterno')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Usuario 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlusuario" v-model.trim="formData.usuario"  label="Usuario" type="text" placeholder="Escribir Usuario"      
                                                    class="" :error="isFieldValid('usuario')" :error-message="getFieldError('usuario')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Clave 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlclave" v-model.trim="formData.clave"  label="Clave" type="text" placeholder="Escribir Clave"      
                                                    class="" :error="isFieldValid('clave')" :error-message="getFieldError('clave')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Foto 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlfoto" v-model.trim="formData.foto"  label="Foto" type="text" placeholder="Escribir Foto"      
                                                    class="" :error="isFieldValid('foto')" :error-message="getFieldError('foto')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Theme 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltheme" v-model.trim="formData.theme"  label="Theme" type="text" placeholder="Escribir Theme"      
                                                    class="" :error="isFieldValid('theme')" :error-message="getFieldError('theme')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Estado 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlestado" v-model.trim="formData.estado"  label="Estado" type="text" placeholder="Escribir Estado"      
                                                    class="" :error="isFieldValid('estado')" :error-message="getFieldError('estado')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Account Status 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlaccount_status" v-model.trim="formData.account_status"  label="Account Status" type="text" placeholder="Escribir Account Status"      
                                                    class="" :error="isFieldValid('account_status')" :error-message="getFieldError('account_status')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Idcarnet *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlidcarnet" v-model.trim="formData.idcarnet"  label="Idcarnet" type="text" placeholder="Escribir Idcarnet"      
                                                    class="" :error="isFieldValid('idcarnet')" :error-message="getFieldError('idcarnet')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Expedido 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlexpedido" v-model.trim="formData.expedido"  label="Expedido" type="text" placeholder="Escribir Expedido"      
                                                    class="" :error="isFieldValid('expedido')" :error-message="getFieldError('expedido')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nombres 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnombres" v-model.trim="formData.nombres"  label="Nombres" type="text" placeholder="Escribir Nombres"      
                                                    class="" :error="isFieldValid('nombres')" :error-message="getFieldError('nombres')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Appaterno 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlappaterno" v-model.trim="formData.appaterno"  label="Appaterno" type="text" placeholder="Escribir Appaterno"      
                                                    class="" :error="isFieldValid('appaterno')" :error-message="getFieldError('appaterno')">
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
			default: 'usuarios',
		},
		routeName: {
			type: String,
			default: 'usuariosedit',
		},
		pagePath: {
			type : String,
			default : 'usuarios/edit',
		},
		apiPath: {
			type: String,
			default: 'usuarios/edit',
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
		user_role_id: "", 
		permisos: "", 
		editar: "", 
		jsonunidad: "", 
		apmaterno: "", 
		usuario: "", 
		clave: "", 
		foto: "", 
		theme: "", 
		estado: "", 
		account_status: "", 
		idcarnet: "", 
		expedido: "", 
		nombres: "", 
		appaterno: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/usuarios`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			user_role_id: { numeric },
		idcarnet: { required }
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
