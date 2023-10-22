<template>
    <main class="main-page" id="">
        <template v-if="showHeader">
            <section class="page-section q-pa-md" >
                <div class="container-fluid">
                    <div class="row justify-between items-center q-col-gutter-md">
                        <div  class="col col-md-auto " >
                            <div class=" text-h6 text-primary" >
                                V Permanente2
                            </div>
                        </div>
                        <div  class="col-md-auto col-12 " >
                            <q-input debounce="1000"  placeholder="Buscar" v-model="searchText" >
                            <template v-slot:append>
                                <q-icon name="search"></q-icon>
                            </template>
                            </q-input>
                        </div>
                    </div>
                </div>
            </section>
        </template>
        <section class="page-section " >
            <div class="container-fluid">
                <div class="row q-col-gutter-x-md">
                    <div  class="col comp-grid" >
                        <div class="row q-mb-md q-gutter-sm">
                            <div class="q-px-sm nice-shadow-16" v-if="searchText">
                                Buscar: 
                                <q-chip icon="search" removable @remove="clearSearch()" :label="searchText">
                                </q-chip>
                            </div>
                        </div>
                        <div >
                            <template v-if="showBreadcrumbs && $route.query.tag">
                                <q-breadcrumbs class="q-pa-md">
                                    <q-breadcrumbs-el icon="arrow_back" class="text-capitalize" :label="$route.query.tag" to="/v_permanente2"></q-breadcrumbs-el>
                                    <q-breadcrumbs-el :label="$route.query.label"></q-breadcrumbs-el>
                                </q-breadcrumbs>
                            </template>
                            <!-- page records template -->
                            <div >
                                <q-table 
                                :flat="true"
                                table-header-class="text-h4 bg-grey-2"
                                :bordered="false"
                                :columns="app.menus.VPermanente2ListHeaderItems" 
                                :rows="records"
                                :binary-state-sort="true"
                                separator="horizontal"
                                :dense="true"
                                row-key="resultado" 
                                v-model:pagination="pagination"
                                hide-bottom
                                @request="setPagination"
                                :loading="loading">
                                <!-- Start of Table Layout -->
                                <template v-slot:body="props">
                                    <q-tr :class="{selected: isCurrentRecord(props.row)}" :props="props">
                                        <q-td  key="resultado" :props="props">
                                            {{ props.row.resultado }}
                                        </q-td>
                                        <q-td  key="iditem" :props="props">
                                            {{ props.row.iditem }}
                                        </q-td>
                                        <q-td  key="item" :props="props">
                                            {{ props.row.item }}
                                        </q-td>
                                        <q-td  key="fnacimiento" :props="props">
                                            {{ props.row.fnacimiento }}
                                        </q-td>
                                        <q-td  key="codunidad" :props="props">
                                            {{ props.row.codunidad }}
                                        </q-td>
                                        <q-td  key="pagovac" :props="props">
                                            {{ props.row.pagovac }}
                                        </q-td>
                                        <q-td  key="fechaini" :props="props">
                                            {{ props.row.fechaini }}
                                        </q-td>
                                        <q-td  key="fechafin" :props="props">
                                            {{ props.row.fechafin }}
                                        </q-td>
                                        <q-td  key="vigente" :props="props">
                                            {{ props.row.vigente }}
                                        </q-td>
                                        <q-td  key="haberbasico" :props="props">
                                            {{ props.row.haberbasico }}
                                        </q-td>
                                        <q-td  key="fechabaja" :props="props">
                                            {{ props.row.fechabaja }}
                                        </q-td>
                                        <q-td  key="iddetesc" :props="props">
                                            {{ props.row.iddetesc }}
                                        </q-td>
                                        <q-td  key="fecha" :props="props">
                                            {{ props.row.fecha }}
                                        </q-td>
                                        <q-td  key="idpermanente" :props="props">
                                            {{ props.row.idpermanente }}
                                        </q-td>
                                        <q-td  key="denominacion" :props="props">
                                            {{ props.row.denominacion }}
                                        </q-td>
                                        <q-td  key="codevaluacion" :props="props">
                                            {{ props.row.codevaluacion }}
                                        </q-td>
                                        <q-td  key="estado" :props="props">
                                            {{ props.row.estado }}
                                        </q-td>
                                        <q-td  key="nombre_completo" :props="props">
                                            {{ props.row.nombre_completo }}
                                        </q-td>
                                        <q-td  key="idcarnet" :props="props">
                                            {{ props.row.idcarnet }}
                                        </q-td>
                                        <q-td  key="expedido" :props="props">
                                            {{ props.row.expedido }}
                                        </q-td>
                                        <q-td  key="nombres" :props="props">
                                            {{ props.row.nombres }}
                                        </q-td>
                                        <q-td  key="appaterno" :props="props">
                                            {{ props.row.appaterno }}
                                        </q-td>
                                        <q-td  key="apmaterno" :props="props">
                                            {{ props.row.apmaterno }}
                                        </q-td>
                                        <q-td  key="fotografia" :props="props">
                                            {{ props.row.fotografia }}
                                        </q-td>
                                        <q-td  key="tipo" :props="props">
                                            {{ props.row.tipo }}
                                        </q-td>
                                        <q-td  key="memorandum" :props="props">
                                            {{ props.row.memorandum }}
                                        </q-td>
                                        <q-td  key="motivo" :props="props">
                                            {{ props.row.motivo }}
                                        </q-td>
                                        <q-td  key="glosa" :props="props">
                                            {{ props.row.glosa }}
                                        </q-td>
                                        <q-td  key="unidad" :props="props">
                                            {{ props.row.unidad }}
                                        </q-td>
                                        <q-td  key="cargopla" :props="props">
                                            {{ props.row.cargopla }}
                                        </q-td>
                                        <q-td  key="financiero" :props="props">
                                            {{ props.row.financiero }}
                                        </q-td>
                                    </q-tr>
                                </template>
                                <!-- End of Table Layout-->
                                </q-table>
                            </div>
                            <!-- page loading indicator template -->
                            <template v-if="loading">
                                <q-inner-loading :showing="loading">
                                    <q-spinner color="primary" size="30px"> 
                                    </q-spinner>
                                </q-inner-loading>
                            </template>
                            <!-- page empty record template -->
                            <template v-if="pageReady && !records.length">
                                <q-card :flat="$q.screen.gt.md">
                                    <q-card-section>
                                        <div class="text-grey text-h6 text-center">
                                            ningún record fue encontrado
                                        </div>
                                    </q-card-section>
                                </q-card>
                            </template>
                            <!-- page footer template-->
                            <template v-if="showFooter">
                                <div class="">
                                    <q-separator />
                                    <div class="q-pa-md" v-show="pageReady">
                                        <div class="row items-center justify-between">
                                            <div class="row items-center q-col-gutter-md">
                                            </div>
                                            <div v-if="paginate && totalRecords > 0" class="row  items-center justify-between">
                                                <div class="col-auto">
                                                    <q-chip square>Archivos {{recordsPosition}} de {{totalRecords}}</q-chip>
                                                </div>
                                                <div v-if="totalPages > 1">
                                                    <q-pagination  color="primary"  v-model="pagination.page" :direction-links="true" :boundary-links="true" :max-pages="5" :boundary-numbers="true" :max="totalPages"></q-pagination>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script setup>
	import {  computed, ref, toRefs, onMounted } from 'vue';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useListPage } from 'src/composables/listpage';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		primaryKey : {
			type : String,
			default : '',
		},
		pageName : {
			type : String,
			default : 'v_permanente2',
		},
		routeName : {
			type : String,
			default : 'v_permanente2list',
		},
		apiPath : {
			type : String,
			default : 'v_permanente2/index',
		},
		paginate: {
			type: Boolean,
			default: true,
		},
		scrollIntoView: {
			type: Boolean,
			default: true,
		},
		isSubPage: {
			type: Boolean,
			default: false,
		},
		showHeader: {
			type: Boolean,
			default: true,
		},
		showFooter: {
			type: Boolean,
			default: true,
		},
		showBreadcrumbs: {
			type: Boolean,
			default: true,
		},
		exportButton: {
			type: Boolean,
			default: true,
		},
		importButton: {
			type: Boolean,
			default: false,
		},
		multiCheckbox: {
			type: Boolean,
			default: false,
		},
		emptyRecordMsg: {
			type: String,
			default: "ningún record fue encontrado",
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
		page: {
			type: Number,
			default: 1,
		},
		limit: {
			type: Number,
			default: 10,
		},
		mergeRecords: {
			type: Boolean,
			default: false,
		},
		search: {
			type: String,
			default: '',
		},
		fieldName: null,
		fieldValue: null,
		sortBy: {
			type: String,
			default: '',
		},
		sortType: {
			type: String,
			default: 'desc', //desc or asc
		},
	});
	
	const app = useApp();
	
	const defaultStoreState = {
		filters: {
		},
		pagination: {
			page: props.page,
			rowsPerPage: props.limit,
			rowsNumber: 0,
			sortBy: props.sortBy,
			descending: props.sortType == 'desc'
		},
		searchText: props.search,
		primaryKey: props.primaryKey
	}
	const store = usePageStore(props.pageName,  defaultStoreState);
	
	// page hooks where logics resides
	const page = useListPage({ store, props });
	
	const {records, filters,  totalRecords,  selectedItems, expandedRows, pagination,} = toRefs(store.state);
	const { pageReady, loading, searchText, } = toRefs(page.state);
	
	const {     totalPages, recordsPosition, } = page.computedProps;
	
	//page methods
	const { load,     clearSearch,  setPagination, deleteItem,  isCurrentRecord,        } = page.methods;
	
	const pageTitle = computed({
		get: function () {
			return "V Permanente2"
		}
	});
	
	useMeta(() => {
		return {
			title: pageTitle.value //set browser title
		}
	});
	
	onMounted(()=>{ 
		load();
	});
</script>
<style scoped>
</style>
