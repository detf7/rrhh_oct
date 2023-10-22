<template>
    <main class="main-page" id="">
        <template v-if="showHeader">
            <section class="page-section q-pa-md" >
                <div class="container-fluid">
                    <div class="row justify-between items-center q-col-gutter-md">
                        <div  class="col col-md-auto " >
                            <div class=" text-h6 text-primary" >
                                V Escalaimpr
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
                                    <q-breadcrumbs-el icon="arrow_back" class="text-capitalize" :label="$route.query.tag" to="/v_escalaimpr"></q-breadcrumbs-el>
                                    <q-breadcrumbs-el :label="$route.query.label"></q-breadcrumbs-el>
                                </q-breadcrumbs>
                            </template>
                            <div class="row q-col-gutter-x-md q-col-gutter-md justify-start">
                                <div class="col">
                                    <!-- page records template -->
                                    <div >
                                        <q-table 
                                        :flat="true"
                                        table-header-class="text-h4 bg-grey-2"
                                        :bordered="false"
                                        :columns="app.menus.VEscalaimprListHeaderItems" 
                                        :rows="records"
                                        :binary-state-sort="true"
                                        separator="horizontal"
                                        :dense="true"
                                        row-key="costo_mes" 
                                        v-model:pagination="pagination"
                                        hide-bottom
                                        @request="setPagination"
                                        :loading="loading">
                                        <!-- Start of Table Layout -->
                                        <template v-slot:body="props">
                                            <q-tr :class="{selected: isCurrentRecord(props.row)}" :props="props">
                                                <q-td auto-width key="masterdetailbtn" :props="props">
                                                    <q-btn @click="setCurrentRecord(props.row)" flat padding="xs" color="primary" no-caps  icon="more_vert">
                                                    </q-btn>
                                                </q-td>
                                                <q-td  key="costo_mes" :props="props">
                                                    {{ props.row.costo_mes }}
                                                </q-td>
                                                <q-td  key="nivel" :props="props">
                                                    {{ props.row.nivel }}
                                                </q-td>
                                                <q-td  key="tot_items" :props="props">
                                                    {{ props.row.tot_items }}
                                                </q-td>
                                                <q-td  key="haberbasico" :props="props">
                                                    {{ props.row.haberbasico }}
                                                </q-td>
                                                <q-td  key="financiero" :props="props">
                                                    {{ props.row.financiero }}
                                                </q-td>
                                                <q-td  key="categoria" :props="props">
                                                    {{ props.row.categoria }}
                                                </q-td>
                                                <q-td  key="codgestion" :props="props">
                                                    {{ props.row.codgestion }}
                                                </q-td>
                                                <q-td  key="denominaciones_por_nivel_y_financiero" :props="props">
                                                    {{ props.row.denominaciones_por_nivel_y_financiero }}
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
                                <!-- Detal Page Column -->
                                <div class="col-12" v-if="currentRecord && !isSubPage">
                                    <q-card  :flat="isSubPage" class=" nice-shadow-16">
                                        <component :is="masterDetailPage" :scroll-into-view="true"></component>
                                    </q-card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script setup>
	import { defineAsyncComponent, computed, ref, toRefs, onMounted } from 'vue';
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
			default : 'v_escalaimpr',
		},
		routeName : {
			type : String,
			default : 'v_escalaimprlist',
		},
		apiPath : {
			type : String,
			default : 'v_escalaimpr/index',
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
	
	const {records, filters, currentRecord, totalRecords,  selectedItems, expandedRows, pagination,} = toRefs(store.state);
	const { pageReady, loading, searchText, } = toRefs(page.state);
	
	const {     totalPages, recordsPosition, } = page.computedProps;
	
	//page methods
	const { load,     clearSearch,  setPagination, deleteItem, setCurrentRecord, isCurrentRecord,        } = page.methods;
	
	const pageTitle = computed({
		get: function () {
			return "V Escalaimpr"
		}
	});
	const masterDetailPage = computed(() => defineAsyncComponent(() => import("./detail-pages.vue")));
	
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
