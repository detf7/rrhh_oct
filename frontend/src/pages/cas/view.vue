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
                                                            <div class="text-grey text-weight-medium mb-1">Id Cas</div>
                                                            <div class="text-bold">{{ item.id_cas }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Fecha Recepcion</div>
                                                            <div class="text-bold">{{$utils.humanDate( item.fecha_recepcion )}}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Fecha Registro</div>
                                                            <div class="text-bold">{{ item.fecha_registro }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Anios Serv</div>
                                                            <div class="text-bold">{{ item.anios_serv }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Meses Serv</div>
                                                            <div class="text-bold">{{ item.meses_serv }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Dias Serv</div>
                                                            <div class="text-bold">{{ item.dias_serv }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Tot Servicio</div>
                                                            <div class="text-bold">{{ item.tot_servicio }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Fecha Ini Servicio</div>
                                                            <div class="text-bold">{{ item.fecha_ini_servicio }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Fecha Fin Servicio</div>
                                                            <div class="text-bold">{{ item.fecha_fin_servicio }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Dato Cas</div>
                                                            <div class="text-bold">{{ item.dato_cas }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Descripcion Cas</div>
                                                            <div class="text-bold">{{ item.descripcion_cas }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Entidad Cas</div>
                                                            <div class="text-bold">{{ item.entidad_cas }}</div>
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
                                                            <div class="text-grey text-weight-medium mb-1">Monto Cas</div>
                                                            <div class="text-bold">{{ item.monto_cas }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Incremento</div>
                                                            <div class="text-bold">{{ item.incremento }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                        </div>
                                        <div class="row q-col-gutter-xs justify-start q-ma-md">
                                            <div><q-btn icon="edit" label="Edit" glossy  flat :rounded="false"  no-caps  unelevated   padding="xs" color="positive" title="Editar"  @click="app.openPageDialog({ page:'cas/edit', url: `/cas/edit/${item.id_cas}` , closeBtn: true })">
                                            </q-btn></div>
                                            <div><q-btn icon="delete_sweep" label="Delete" glossy  flat :rounded="false"  no-caps  unelevated   padding="xs" color="negative" title="Borrar"  @click="deleteItem(item.id_cas)">
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
	import { utils } from 'src/utils';
	import { useViewPage } from 'src/composables/viewpage.js';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		id: [String, Number],
		primaryKey: {
			type: String,
			default: 'id_cas',
		},
		pageName: {
			type: String,
			default: 'cas',
		},
		routeName: {
			type: String,
			default: 'casview',
		},
		apiPath: {
			type: String,
			default: 'cas/view',
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
