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
                                                            Saldo Cas 
                                                        </div>
                                                        <div class="col-sm-9 col-12">
                                                            <q-input   ref="ctrlsaldo_cas" v-model.trim="formData.saldo_cas"  label="Saldo Cas" type="number" placeholder="Escribir Saldo Cas"   step="0.1"    
                                                            class="" :error="isFieldValid('saldo_cas')" :error-message="getFieldError('saldo_cas')">
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
			default: 'temp_permanente',
		},
		routeName: {
			type: String,
			default: 'temp_permanenteedit',
		},
		pagePath: {
			type : String,
			default : 'temp_permanente/edit',
		},
		apiPath: {
			type: String,
			default: 'temp_permanente/edit',
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
		saldo_cas: "", 
		nombres: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/temp_permanente`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			saldo_cas: { numeric }
		}
	});
	
	const page = useEditPage({ store, props, formData, rules, afterSubmit });
	
	const {  saving, loading, pageReady,   } = toRefs(page.state);
	
	const {  currentRecord: editRecord } = toRefs(store.state);
	
	const { load, submitForm, isFieldValid, getFieldError,  } = page.methods;
	
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
