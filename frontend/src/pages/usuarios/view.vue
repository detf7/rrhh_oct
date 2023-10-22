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
                                    Ver
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </template>
            <section class="page-section " >
                <div class="container">
                    <div class="row q-col-gutter-x-md">
                        <div  class="col comp-grid" >
                            <div >
                                <div class="row q-col-gutter-x-md ">
                                    <div class="col">
                                        <div class="q-mb-3 row q-col-gutter-md justify-start">
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">User Role Id</div>
                                                            <div class="text-bold">
                                                                <q-btn v-if="item.user_role_id" @click="app.openPageDialog({ page: 'roles/view', url: `/roles/view/${item.user_role_id}` , closeBtn: true })" padding="xs" flat color="primary" no-caps >
                                                                    <q-icon name="visibility" size="xs"  class="q-mr-xs"></q-icon>  Roles Detail
                                                                </q-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Permisos</div>
                                                            <div class="text-bold">{{ item.permisos }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Editar</div>
                                                            <div class="text-bold">{{ item.editar }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Jsonunidad</div>
                                                            <div class="text-bold">{{ item.jsonunidad }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Apmaterno</div>
                                                            <div class="text-bold">{{ item.apmaterno }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Usuario</div>
                                                            <div class="text-bold">{{ item.usuario }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Clave</div>
                                                            <div class="text-bold">{{ item.clave }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Foto</div>
                                                            <div class="text-bold">{{ item.foto }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Theme</div>
                                                            <div class="text-bold">{{ item.theme }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Estado</div>
                                                            <div class="text-bold">{{ item.estado }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Account Status</div>
                                                            <div class="text-bold">{{ item.account_status }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Idcarnet</div>
                                                            <div class="text-bold">{{ item.idcarnet }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Expedido</div>
                                                            <div class="text-bold">{{ item.expedido }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Nombres</div>
                                                            <div class="text-bold">{{ item.nombres }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Appaterno</div>
                                                            <div class="text-bold">{{ item.appaterno }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                        </div>
                                        <div class="row q-col-gutter-xs justify-start q-ma-md">
                                            <div><q-btn icon="edit" label="Edit" glossy  flat :rounded="false"  no-caps  unelevated   padding="xs" color="positive" title="Editar"  @click="app.openPageDialog({ page:'usuarios/edit', url: `/usuarios/edit/${item.idcarnet}` , closeBtn: true })">
                                            </q-btn></div>
                                            <div><q-btn icon="delete_sweep" label="Delete" glossy  flat :rounded="false"  no-caps  unelevated   padding="xs" color="negative" title="Borrar"  @click="deleteItem(item.idcarnet)">
                                            </q-btn></div>
                                        </div>
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
	import { defineAsyncComponent, computed, ref, toRefs, onMounted } from 'vue';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app.js';
	import { useViewPage } from 'src/composables/viewpage.js';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		id: [String, Number],
		primaryKey: {
			type: String,
			default: 'idcarnet',
		},
		pageName: {
			type: String,
			default: 'usuarios',
		},
		routeName: {
			type: String,
			default: 'usuariosview',
		},
		apiPath: {
			type: String,
			default: 'usuarios/view',
		},
		editButton: {
			type: Boolean,
			default: true,
		},
		deleteButton: {
			type: Boolean,
			default: true,
		},
		exportButton: {
			type: Boolean,
			default: true,
		},
		scrollIntoView: {
			type: Boolean,
			default: true,
		},
		isSubPage: {
			type : Boolean,
			default : false,
		},
		titleBeforeDelete: {
			type: String,
			default: "Eliminar el registro",
		},
		msgBeforeDelete: {
			type: String,
			default: "¿Seguro que quieres borrar este registro?",
		},
		msgAfterDelete: {
			type: String,
			default: "Grabar eliminado con éxito",
		},
		showHeader: {
			type: Boolean,
			default: true,
		},
		showFooter: {
			type: Boolean,
			default: true,
		},
	});
	
	const store = usePageStore(props.pageName);
	const app = useApp(props);
	
	const page = useViewPage({store, props}); // where page logics resides
	
	const {  currentRecord } = toRefs(store.state);
	const { loading, pageReady } = toRefs(page.state);
	const item = currentRecord;
	
	const  { load, deleteItem,    } = page.methods;
	
	const masterDetailPage = computed(() => defineAsyncComponent(() => import("./detail-pages.vue")));
	
	useMeta(() => {
		return {
			//set browser title
			title: "Ver"
		}
	});
	
	onMounted(()=>{ 
		load();
	});
</script>
<style scoped>
</style>
