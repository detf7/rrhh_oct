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
                                                    <div class="text-grey text-weight-medium mb-1">Codpla</div>
                                                    <div class="text-bold">
                                                        <q-btn v-if="item.codpla" @click="app.openPageDialog({ page: 'planillas/view', url: `/planillas/view/${item.codpla}` , closeBtn: true })" padding="xs" flat color="primary" no-caps >
                                                            <q-icon name="visibility" size="xs"  class="q-mr-xs"></q-icon>  Planillas Detail
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
                                                    <div class="text-grey text-weight-medium mb-1">Cargos</div>
                                                    <div class="text-bold">{{ item.cargos }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <q-card  class="q-pa-md nice-shadow-16">
                                            <div class="row q-col-gutter-x-md items-center">
                                                <div class="col">
                                                    <div class="text-grey text-weight-medium mb-1">Salarios</div>
                                                    <div class="text-bold">{{ item.salarios }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <q-card  class="q-pa-md nice-shadow-16">
                                            <div class="row q-col-gutter-x-md items-center">
                                                <div class="col">
                                                    <div class="text-grey text-weight-medium mb-1">Ausencia</div>
                                                    <div class="text-bold">{{ item.ausencia }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <q-card  class="q-pa-md nice-shadow-16">
                                            <div class="row q-col-gutter-x-md items-center">
                                                <div class="col">
                                                    <div class="text-grey text-weight-medium mb-1">Atraso</div>
                                                    <div class="text-bold">{{ item.atraso }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <q-card  class="q-pa-md nice-shadow-16">
                                            <div class="row q-col-gutter-x-md items-center">
                                                <div class="col">
                                                    <div class="text-grey text-weight-medium mb-1">Sminimo</div>
                                                    <div class="text-bold">{{ item.sminimo }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <q-card  class="q-pa-md nice-shadow-16">
                                            <div class="row q-col-gutter-x-md items-center">
                                                <div class="col">
                                                    <div class="text-grey text-weight-medium mb-1">Haberbasico</div>
                                                    <div class="text-bold">{{ item.haberbasico }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <q-card  class="q-pa-md nice-shadow-16">
                                            <div class="row q-col-gutter-x-md items-center">
                                                <div class="col">
                                                    <div class="text-grey text-weight-medium mb-1">Tsalario</div>
                                                    <div class="text-bold">{{ item.tsalario }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <q-card  class="q-pa-md nice-shadow-16">
                                            <div class="row q-col-gutter-x-md items-center">
                                                <div class="col">
                                                    <div class="text-grey text-weight-medium mb-1">Tdescuento</div>
                                                    <div class="text-bold">{{ item.tdescuento }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <q-card  class="q-pa-md nice-shadow-16">
                                            <div class="row q-col-gutter-x-md items-center">
                                                <div class="col">
                                                    <div class="text-grey text-weight-medium mb-1">Idplasalario</div>
                                                    <div class="text-bold">{{ item.idplasalario }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <q-card  class="q-pa-md nice-shadow-16">
                                            <div class="row q-col-gutter-x-md items-center">
                                                <div class="col">
                                                    <div class="text-grey text-weight-medium mb-1">Codunidad</div>
                                                    <div class="text-bold">{{ item.codunidad }}</div>
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
                                                    <div class="text-grey text-weight-medium mb-1">Cas</div>
                                                    <div class="text-bold">{{ item.cas }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <q-card  class="q-pa-md nice-shadow-16">
                                            <div class="row q-col-gutter-x-md items-center">
                                                <div class="col">
                                                    <div class="text-grey text-weight-medium mb-1">Mantiguedad</div>
                                                    <div class="text-bold">{{ item.mantiguedad }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <q-card  class="q-pa-md nice-shadow-16">
                                            <div class="row q-col-gutter-x-md items-center">
                                                <div class="col">
                                                    <div class="text-grey text-weight-medium mb-1">Frontera</div>
                                                    <div class="text-bold">{{ item.frontera }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <q-card  class="q-pa-md nice-shadow-16">
                                            <div class="row q-col-gutter-x-md items-center">
                                                <div class="col">
                                                    <div class="text-grey text-weight-medium mb-1">Abandono</div>
                                                    <div class="text-bold">{{ item.abandono }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <q-card  class="q-pa-md nice-shadow-16">
                                            <div class="row q-col-gutter-x-md items-center">
                                                <div class="col">
                                                    <div class="text-grey text-weight-medium mb-1">Falta</div>
                                                    <div class="text-bold">{{ item.falta }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <q-card  class="q-pa-md nice-shadow-16">
                                            <div class="row q-col-gutter-x-md items-center">
                                                <div class="col">
                                                    <div class="text-grey text-weight-medium mb-1">Unidad</div>
                                                    <div class="text-bold">{{ item.unidad }}</div>
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
                                                    <div class="text-grey text-weight-medium mb-1">Denominacion</div>
                                                    <div class="text-bold">{{ item.denominacion }}</div>
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
                                                    <div class="text-grey text-weight-medium mb-1">Glosa</div>
                                                    <div class="text-bold">{{ item.glosa }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                </div>
                                <div class="row q-col-gutter-xs justify-start q-ma-md">
                                    <div><q-btn icon="edit" label="Edit" glossy  flat :rounded="false"  no-caps  unelevated   padding="xs" color="positive" title="Editar"  @click="app.openPageDialog({ page:'plasalario/edit', url: `/plasalario/edit/${item.idplasalario}` , closeBtn: true })">
                                    </q-btn></div>
                                    <div><q-btn icon="delete_sweep" label="Delete" glossy  flat :rounded="false"  no-caps  unelevated   padding="xs" color="negative" title="Borrar"  @click="deleteItem(item.idplasalario)">
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
			default: 'idplasalario',
		},
		pageName: {
			type: String,
			default: 'plasalario',
		},
		routeName: {
			type: String,
			default: 'plasalarioview',
		},
		apiPath: {
			type: String,
			default: 'plasalario/view',
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
