<template>
    <q-page class="main-page"  id="index-page">
        <section class="page-section q-mt-lg" >
            <div class="container-fluid">
                <div class="row justify-center q-col-gutter-md">
                    <div  class="col-12 col-sm-6 col-md-3 comp-grid" >
                        <q-card  :flat="isSubPage" class="q-pa-md nice-shadow-16">
                            <div class="row justify-center q-col-gutter-md items-center">
                                <div>
                                    <q-avatar text-color="primary" font-size="48px" icon="account_circle"></q-avatar>
                                </div>
                                <div class="text-h6">Inicio de sesión de usuario</div>
                            </div>
                        </q-card>
                        <q-card  :flat="isSubPage" class=" q-my-md q-pa-md nice-shadow-16 nice-shadow-16">
                            <div >
                                <q-form ref="observer" @submit.prevent="startLogin()">
                                <q-input class="q-mb-md" label="Nombre de usuario" outlined dense placeholder="Nombre de usuario" v-model.trim="formData.username"  required="required" type="text" >
                                <template v-slot:prepend>
                                    <q-icon name="account_circle"></q-icon>
                                </template>
                                </q-input>
                                <q-input label="Contraseña"  class="q-mb-md" placeholder="Contraseña" required="required" v-model="formData.password" type="password">
                                <template v-slot:prepend>
                                    <q-icon name="lock"></q-icon>
                                </template>
                                </q-input>
                                <div class="row q-mb-md">
                                    <div class="col-6">
                                        <q-checkbox v-model="rememberUser"> Recuérdame</q-checkbox>
                                    </div>
                                    <div class="col-6">
                                        <q-btn to="/index/forgotpassword" class="text-danger" flat no-caps color="negative"> Restablecer la contraseña</q-btn>
                                    </div>
                                </div>
                                <transition appear enter-active-class="animated bounceIn" leave-active-class="animated fadeOut">
                                    <q-banner dense  inline-actions rounded  class="bg-red-2 q-my-md" v-if="loginErrorMsg">
                                        <template v-slot:avatar>
                                            <q-icon color="red" name="error"></q-icon>
                                        </template>
                                        {{ loginErrorMsg }}
                                        <template v-slot:action>
                                            <q-btn @click="loginErrorMsg = null" dense flat icon="close" />
                                            </template>
                                        </q-banner>
                                    </transition>
                                    <div class="text-center">
                                        <q-btn label="Iniciar sesión"  :loading="loading" color="primary" icon="lock_open" class="full-width"  type="submit"> 
                                        </q-btn>
                                    </div>
                                    </q-form>
                                </div>
                            </q-card>
                            <q-card  :flat="isSubPage" class="q-pa-md nice-shadow-16">
                                <div class="row justify-between items-center">
                                    <div class="col">
                                        ¿No tienes una cuenta?
                                    </div>
                                    <div class="col-auto">
                                        <q-btn icon="account_box" label="Registro" color="positive" class="full-width" to="/index/register">
                                        </q-btn>
                                    </div>
                                </div>
                            </q-card>
                        </div>
                    </div>
                </div>
            </section>
        </q-page>
    
</template>
<script setup>
	import {  computed, ref, reactive } from 'vue';
	import { useApp } from 'src/composables/app';
	import { useAuth } from 'src/composables/auth';
	
	import { useRoute, useRouter } from 'vue-router';
	
	
	const props = defineProps({
		pageName: {
			type: String,
			default: 'index',
		},
		routeName: {
			type: String,
			default: 'index',
		},
		isSubPage: {
			type : Boolean,
			default : false,
		},
	});
	const route = useRoute();
	const router = useRouter();
	const auth = useAuth();
	const app = useApp();
	const formData = reactive({
		username: '',
		password:'',
	});
	const pageReady = ref(true);
	const loading = ref(false);
	const loginErrorMsg = ref('');
	const rememberUser = ref(false);
	async function startLogin (){
		try{
			loading.value = true;
			loginErrorMsg.value = '';
			let url = "/auth/login";
			let payload = {
				formData,
				rememberUser:rememberUser.value,
				url
			};
			const loginData= await auth.login(payload);
			loading.value = false;
			if (loginData.token) {
				let nextUrl = route.query.nexturl || '/home'
				router.go(nextUrl);
			}
			else{
				router.push(loginData.nextpage);
			}
		}
		catch(error){
			loading.value = false;
			loginErrorMsg.value = error.request?.response || "Unable to establish connection...";
		}
	}
	
</script>
<style></style>
