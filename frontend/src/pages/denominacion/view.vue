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
                                <div class="q-mb-3 ">
                                    <q-item>
                                        <q-item-section>
                                            <q-item-label caption>Id Denominacion: </q-item-label>
                                            <q-item-label class="text-bold">{{ item.id_denominacion }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                    <q-separator></q-separator>
                                    <q-item>
                                        <q-item-section>
                                            <q-item-label caption>Nivel Denom: </q-item-label>
                                            <q-item-label class="text-bold">{{ item.nivel_denom }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                    <q-separator></q-separator>
                                    <q-item>
                                        <q-item-section>
                                            <q-item-label caption>Desc Denominacion: </q-item-label>
                                            <q-item-label class="text-bold">{{ item.desc_denominacion }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                    <q-separator></q-separator>
                                    <q-item>
                                        <q-item-section>
                                            <q-item-label caption>Haber Basico: </q-item-label>
                                            <q-item-label class="text-bold">{{ item.haber_basico }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                    <q-separator></q-separator>
                                    <q-item>
                                        <q-item-section>
                                            <q-item-label caption>Codgestion: </q-item-label>
                                            <q-item-label class="text-bold">{{ item.codgestion }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                    <q-separator></q-separator>
                                    <q-item>
                                        <q-item-section>
                                            <q-item-label caption>Nro Items: </q-item-label>
                                            <q-item-label class="text-bold">{{ item.nro_items }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                    <q-separator></q-separator>
                                    <q-item>
                                        <q-item-section>
                                            <q-item-label caption>Costo Mensual: </q-item-label>
                                            <q-item-label class="text-bold">{{ item.costo_mensual }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                    <q-separator></q-separator>
                                    <q-item>
                                        <q-item-section>
                                            <q-item-label caption>Estado: </q-item-label>
                                            <q-item-label class="text-bold">{{ item.estado }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                    <q-separator></q-separator>
                                    <q-item>
                                        <q-item-section>
                                            <q-item-label caption>Categoria: </q-item-label>
                                            <q-item-label class="text-bold">{{ item.categoria }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                    <q-separator></q-separator>
                                    <q-item>
                                        <q-item-section>
                                            <q-item-label caption>Fuente: </q-item-label>
                                            <q-item-label class="text-bold">{{ item.fuente }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                    <q-separator></q-separator>
                                </div>
                                <div class="row q-col-gutter-xs justify-start q-ma-md">
                                    <div><q-btn icon="edit" label="Edit" glossy  flat :rounded="false"  no-caps  unelevated   padding="xs" color="positive" title="Editar"  @click="app.openPageDialog({ page:'denominacion/edit', url: `/denominacion/edit/${item.id_denominacion}` , closeBtn: true })">
                                    </q-btn></div>
                                    <div><q-btn icon="delete_sweep" label="Delete" glossy  flat :rounded="false"  no-caps  unelevated   padding="xs" color="negative" title="Borrar"  @click="deleteItem(item.id_denominacion)">
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
			default: 'id_denominacion',
		},
		pageName: {
			type: String,
			default: 'denominacion',
		},
		routeName: {
			type: String,
			default: 'denominacionview',
		},
		apiPath: {
			type: String,
			default: 'denominacion/view',
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
