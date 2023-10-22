<template>
    <main class="main-page" id="">
        <template v-if="showHeader">
            <section class="page-section q-pa-md" >
                <div class="container-fluid">
                    <div class="row justify-between items-center q-col-gutter-md">
                        <div  class="col col-md-auto " >
                            <div class=" text-h6 text-primary" >
                                V Compra
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
                                    <q-breadcrumbs-el icon="arrow_back" class="text-capitalize" :label="$route.query.tag" to="/v_compra"></q-breadcrumbs-el>
                                    <q-breadcrumbs-el :label="$route.query.label"></q-breadcrumbs-el>
                                </q-breadcrumbs>
                            </template>
                            <!-- page records template -->
                            <div >
                                <q-table 
                                :flat="true"
                                table-header-class="text-h4 bg-grey-2"
                                :bordered="false"
                                :columns="app.menus.VCompraListHeaderItems" 
                                :rows="records"
                                :binary-state-sort="true"
                                separator="horizontal"
                                :dense="true"
                                row-key="codproveedor" 
                                v-model:pagination="pagination"
                                hide-bottom
                                @request="setPagination"
                                :loading="loading">
                                <!-- Start of Table Layout -->
                                <template v-slot:body="props">
                                    <q-tr :class="{selected: isCurrentRecord(props.row)}" :props="props">
                                        <q-td  key="codproveedor" :props="props">
                                            {{ props.row.codproveedor }}
                                        </q-td>
                                        <q-td  key="fecha" :props="props">
                                            {{ props.row.fecha }}
                                        </q-td>
                                        <q-td  key="codalmacen" :props="props">
                                            {{ props.row.codalmacen }}
                                        </q-td>
                                        <q-td  key="total" :props="props">
                                            {{ props.row.total }}
                                        </q-td>
                                        <q-td  key="cantidad" :props="props">
                                            {{ props.row.cantidad }}
                                        </q-td>
                                        <q-td  key="nit" :props="props">
                                            {{ props.row.nit }}
                                        </q-td>
                                        <q-td  key="derivado" :props="props">
                                            {{ props.row.derivado }}
                                        </q-td>
                                        <q-td  key="codunidad" :props="props">
                                            {{ props.row.codunidad }}
                                        </q-td>
                                        <q-td  key="recepcion" :props="props">
                                            {{ props.row.recepcion }}
                                        </q-td>
                                        <q-td  key="codgestion" :props="props">
                                            {{ props.row.codgestion }}
                                        </q-td>
                                        <q-td  key="codusuario" :props="props">
                                            {{ props.row.codusuario }}
                                        </q-td>
                                        <q-td  key="oficina" :props="props">
                                            {{ props.row.oficina }}
                                        </q-td>
                                        <q-td  key="proveedor" :props="props">
                                            {{ props.row.proveedor }}
                                        </q-td>
                                        <q-td  key="almacen" :props="props">
                                            {{ props.row.almacen }}
                                        </q-td>
                                        <q-td  key="idcompra" :props="props">
                                            {{ props.row.idcompra }}
                                        </q-td>
                                        <q-td  key="codcompra" :props="props">
                                            {{ props.row.codcompra }}
                                        </q-td>
                                        <q-td  key="factura" :props="props">
                                            {{ props.row.factura }}
                                        </q-td>
                                        <q-td  key="modalidad" :props="props">
                                            {{ props.row.modalidad }}
                                        </q-td>
                                        <q-td  key="ordencompra" :props="props">
                                            {{ props.row.ordencompra }}
                                        </q-td>
                                        <q-td  key="tipo" :props="props">
                                            {{ props.row.tipo }}
                                        </q-td>
                                        <q-td  key="hruta" :props="props">
                                            {{ props.row.hruta }}
                                        </q-td>
                                        <q-td  key="estado" :props="props">
                                            {{ props.row.estado }}
                                        </q-td>
                                        <q-td  key="glosa" :props="props">
                                            {{ props.row.glosa }}
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
			default : 'v_compra',
		},
		routeName : {
			type : String,
			default : 'v_compralist',
		},
		apiPath : {
			type : String,
			default : 'v_compra/index',
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
			return "V Compra"
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
