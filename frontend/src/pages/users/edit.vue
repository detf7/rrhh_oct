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
                                                    Id *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlid" v-model.trim="formData.id"  label="Id" type="number" placeholder="Escribir Id"   step="any"    
                                                    class="" :error="isFieldValid('id')" :error-message="getFieldError('id')">
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
                                                    Usuario *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <check-duplicate error-msg="Not available" v-model="formData.usuario" check-path="components_data/users_usuario_exist/" v-slot="checker">
                                                    <q-input   ref="ctrlusuario" @blur="checker.check" :loading="checker.loading" v-model.trim="formData.usuario"  label="Usuario" type="text" placeholder="Escribir Usuario"      
                                                    class="" :error="isFieldValid('usuario') || checker.alreadyExist" :error-message="getFieldError('usuario') || checker.errorMsg">
                                                    </q-input>
                                                    </check-duplicate>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Foto 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <div class="q-mb-sm">
                                                        <q-uploader-input show-uploaded-files :max-files="1" :max-file-size="3" accept=".jpg,.png,.gif,.jpeg" :multiple="false" delete-icon="clear" style="width:100%" label="Elija archivos o suelte archivos aquí" upload-path="fileuploader/upload/foto" v-model="formData.foto"  ></q-uploader-input>
                                                        <!-- <small class="q-pa-sm text-negative"></small> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Telefono 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltelefono" v-model.trim="formData.telefono"  label="Telefono" type="text" placeholder="Escribir Telefono"      
                                                    class="" :error="isFieldValid('telefono')" :error-message="getFieldError('telefono')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Carnet 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcarnet" v-model.trim="formData.carnet"  label="Carnet" type="text" placeholder="Escribir Carnet"      
                                                    class="" :error="isFieldValid('carnet')" :error-message="getFieldError('carnet')">
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
			default: 'users',
		},
		routeName: {
			type: String,
			default: 'usersedit',
		},
		pagePath: {
			type : String,
			default : 'users/edit',
		},
		apiPath: {
			type: String,
			default: 'users/edit',
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
		permisos: "", 
		user_role_id: "", 
		jsonunidad: "", 
		id: "", 
		apmaterno: "", 
		usuario: "", 
		foto: "", 
		telefono: "", 
		carnet: "", 
		expedido: "", 
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
			app.navigateTo(`/users`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			user_role_id: { numeric },
		id: { required, numeric },
		usuario: { required }
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
