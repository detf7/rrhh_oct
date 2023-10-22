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
                                                            <div class="text-grey text-weight-medium mb-1">Fechaini</div>
                                                            <div class="text-bold">{{ item.fechaini }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Fechafin</div>
                                                            <div class="text-bold">{{ item.fechafin }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Fechabaja</div>
                                                            <div class="text-bold">{{ item.fechabaja }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Vigente</div>
                                                            <div class="text-bold">{{ item.vigente }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Fecha</div>
                                                            <div class="text-bold">{{ item.fecha }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Pagovac</div>
                                                            <div class="text-bold">{{ item.pagovac }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Codunidad</div>
                                                            <div class="text-bold">
                                                                <q-btn v-if="item.codunidad" @click="app.openPageDialog({ page: 'unidad/view', url: `/unidad/view/${item.codunidad}` , closeBtn: true })" padding="xs" flat color="primary" no-caps >
                                                                    <q-icon name="visibility" size="xs"  class="q-mr-xs"></q-icon>  Unidad Detail
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
                                                            <div class="text-grey text-weight-medium mb-1">Coddetesc</div>
                                                            <div class="text-bold">
                                                                <q-btn v-if="item.coddetesc" @click="app.openPageDialog({ page: 'detescala/view', url: `/detescala/view/${item.coddetesc}` , closeBtn: true })" padding="xs" flat color="primary" no-caps >
                                                                    <q-icon name="visibility" size="xs"  class="q-mr-xs"></q-icon>  Detescala Detail
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
                                                            <div class="text-grey text-weight-medium mb-1">Codpermanente</div>
                                                            <div class="text-bold">
                                                                <q-btn v-if="item.codpermanente" @click="app.openPageDialog({ page: 'permanente/view', url: `/permanente/view/${item.codpermanente}` , closeBtn: true })" padding="xs" flat color="primary" no-caps >
                                                                    <q-icon name="visibility" size="xs"  class="q-mr-xs"></q-icon>  Permanente Detail
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
                                                            <div class="text-grey text-weight-medium mb-1">Idpermanente</div>
                                                            <div class="text-bold">{{ item.idpermanente }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Tipo</div>
                                                            <div class="text-bold">{{ item.tipo }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Memorandum</div>
                                                            <div class="text-bold">{{ item.memorandum }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Motivo</div>
                                                            <div class="text-bold">{{ item.motivo }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Codevaluacion</div>
                                                            <div class="text-bold">
                                                                <q-btn v-if="item.codevaluacion" @click="app.openPageDialog({ page: 'evaluacion/view', url: `/evaluacion/view/${item.codevaluacion}` , closeBtn: true })" padding="xs" flat color="primary" no-caps >
                                                                    <q-icon name="visibility" size="xs"  class="q-mr-xs"></q-icon>  Evaluacion Detail
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
                                                            <div class="text-grey text-weight-medium mb-1">Glosa</div>
                                                            <div class="text-bold">{{ item.glosa }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Codusuario</div>
                                                            <div class="text-bold">
                                                                <q-btn v-if="item.codusuario" @click="app.openPageDialog({ page: 'usuarios/view', url: `/usuarios/view/${item.codusuario}` , closeBtn: true })" padding="xs" flat color="primary" no-caps >
                                                                    <q-icon name="visibility" size="xs"  class="q-mr-xs"></q-icon>  Usuarios Detail
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
                                                            <div class="text-grey text-weight-medium mb-1">Cargopla</div>
                                                            <div class="text-bold">{{ item.cargopla }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Usuarios User Role Id</div>
                                                            <div class="text-bold">
                                                                <q-btn v-if="item.usuarios_user_role_id" @click="app.openPageDialog({ page: 'roles/view', url: `/roles/view/${item.user_role_id}` , closeBtn: true })" padding="xs" flat color="primary" no-caps >
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
                                                            <div class="text-grey text-weight-medium mb-1">Usuarios Permisos</div>
                                                            <div class="text-bold">{{ item.usuarios_permisos }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Usuarios Editar</div>
                                                            <div class="text-bold">{{ item.usuarios_editar }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Usuarios Jsonunidad</div>
                                                            <div class="text-bold">{{ item.usuarios_jsonunidad }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Usuarios Apmaterno</div>
                                                            <div class="text-bold">{{ item.usuarios_apmaterno }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Usuarios Usuario</div>
                                                            <div class="text-bold">{{ item.usuarios_usuario }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Usuarios Clave</div>
                                                            <div class="text-bold">{{ item.usuarios_clave }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Usuarios Foto</div>
                                                            <div class="text-bold">{{ item.usuarios_foto }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Usuarios Theme</div>
                                                            <div class="text-bold">{{ item.usuarios_theme }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Usuarios Estado</div>
                                                            <div class="text-bold">{{ item.usuarios_estado }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Usuarios Account Status</div>
                                                            <div class="text-bold">{{ item.usuarios_account_status }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Usuarios Idcarnet</div>
                                                            <div class="text-bold">{{ item.usuarios_idcarnet }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Usuarios Expedido</div>
                                                            <div class="text-bold">{{ item.usuarios_expedido }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Usuarios Nombres</div>
                                                            <div class="text-bold">{{ item.usuarios_nombres }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Usuarios Appaterno</div>
                                                            <div class="text-bold">{{ item.usuarios_appaterno }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                        </div>
                                        <div class="row q-col-gutter-xs justify-start q-ma-md">
                                            <div><q-btn icon="edit" label="Edit" glossy  flat :rounded="false"  no-caps  unelevated   padding="xs" color="positive" title="Editar"  @click="app.openPageDialog({ page:'permanente/edit', url: `/permanente/edit/${item.idpermanente}` , closeBtn: true })">
                                            </q-btn></div>
                                            <div><q-btn icon="delete_sweep" label="Delete" glossy  flat :rounded="false"  no-caps  unelevated   padding="xs" color="negative" title="Borrar"  @click="deleteItem(item.idpermanente)">
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
			default: 'idpermanente',
		},
		pageName: {
			type: String,
			default: 'permanente',
		},
		routeName: {
			type: String,
			default: 'permanenteview',
		},
		apiPath: {
			type: String,
			default: 'permanente/view',
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
