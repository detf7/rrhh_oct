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
                                <div class="q-mb-3 row q-col-gutter-md justify-start">
                                    <div class="col-12 col-md-4">
                                        <q-card  class="q-pa-md nice-shadow-16">
                                            <div class="row q-col-gutter-x-md items-center">
                                                <div class="col">
                                                    <div class="text-grey text-weight-medium mb-1">Ideventual</div>
                                                    <div class="text-bold">{{ item.ideventual }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
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
                                                    <div class="text-grey text-weight-medium mb-1">Dias</div>
                                                    <div class="text-bold">{{ item.dias }}</div>
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
                                                    <div class="text-grey text-weight-medium mb-1">Codescala</div>
                                                    <div class="text-bold">
                                                        <q-btn v-if="item.codescala" @click="app.openPageDialog({ page: 'escala/view', url: `/escala/view/${item.codescala}` , closeBtn: true })" padding="xs" flat color="primary" no-caps >
                                                            <q-icon name="visibility" size="xs"  class="q-mr-xs"></q-icon>  Escala Detail
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
                                                    <div class="text-grey text-weight-medium mb-1">Codcontrol</div>
                                                    <div class="text-bold">{{ item.codcontrol }}</div>
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
                                                    <div class="text-grey text-weight-medium mb-1">Resolucion</div>
                                                    <div class="text-bold">{{ item.resolucion }}</div>
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
                                </div>
                                <div class="row q-col-gutter-xs justify-start q-ma-md">
                                    <div><q-btn icon="edit" label="Edit" glossy  flat :rounded="false"  no-caps  unelevated   padding="xs" color="positive" title="Editar"  @click="app.openPageDialog({ page:'eventuales/edit', url: `/eventuales/edit/${item.ideventual}` , closeBtn: true })">
                                    </q-btn></div>
                                    <div><q-btn icon="delete_sweep" label="Delete" glossy  flat :rounded="false"  no-caps  unelevated   padding="xs" color="negative" title="Borrar"  @click="deleteItem(item.ideventual)">
                                    </q-btn></div>
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
	import {  computed, ref, toRefs, onMounted } from 'vue';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app.js';
	import { useViewPage } from 'src/composables/viewpage.js';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		id: [String, Number],
		primaryKey: {
			type: String,
			default: 'ideventual',
		},
		pageName: {
			type: String,
			default: 'eventuales',
		},
		routeName: {
			type: String,
			default: 'eventualesview',
		},
		apiPath: {
			type: String,
			default: 'eventuales/view',
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
