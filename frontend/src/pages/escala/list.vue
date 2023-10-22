<template>
    <main class="main-page" id="">
        <section class="page-section q-pa-md" >
            <div class="container-fluid">
                <div class="row justify-between q-col-gutter-md">
                    <div  class="col col-md-auto comp-grid" >
                        <div class=" text-h6 text-bold" >
                            Escala
                        </div>
                        <q-separator class="q-my-sm"></q-separator>
                    </div>
                    <div  class="col col-md-auto comp-grid" >
                        <q-card  :flat="isSubPage" class=" nice-shadow-16">
                            <api-data-source @loaded="(response)=> filters.escala_codgestion.options=response"  api-path="components_data/escala_codgestion_option_list"  v-slot="req">
                                <div class=" row wrap items-center justify-between">
                                    <div class="q-mb-sm text-bold text-primary" >
                                        Código de Gestión : 
                                    </div>
                                    <q-separator class="q-my-sm"></q-separator>
                                    <div>
                                        <q-btn-toggle  no-caps glossy unelevated v-model="filters.escala_codgestion.value" toggle-color="primary" :options="filters.escala_codgestion.options" />
                                    </div>
                                </div>
                            </api-data-source>
                        </q-card>
                    </div>
                    <div  class="col col-md-auto comp-grid" >
                        <q-btn       :rounded="false"  size=""  color="primary" no-caps  unelevated   @click="app.openPageDialog({ page: 'escala/add', url: `/escala/add` , closeBtn: true  })"  class="" >
                            Agregar Escala 
                        </q-btn>
                    </div>
                    <div  class="col col-md-auto comp-grid" >
                        <q-input debounce="1000"  placeholder="" v-model="searchText" >
                        <template v-slot:append>
                            <q-icon name="search"></q-icon>
                        </template>
                        </q-input>
                    </div>
                </div>
            </div>
        </section>
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
                            <div class="q-px-sm nice-shadow-16" v-if="filterHasValue(filters.escala_codgestion)">
                                <strong>Codgestion</strong>
                                <q-chip removable @remove="removeFilter(filters.escala_codgestion)"  :label="getFilterLabel(filters.escala_codgestion)">
                                </q-chip>
                            </div>
                        </div>
                        <div >
                            <template v-if="showBreadcrumbs && $route.query.tag">
                                <q-breadcrumbs class="q-pa-md">
                                    <q-breadcrumbs-el icon="arrow_back" class="text-capitalize" :label="$route.query.tag" to="/escala"></q-breadcrumbs-el>
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
                                        :columns="app.menus.EscalaListHeaderItems" 
                                        :rows="records"
                                        :binary-state-sort="true"
                                        separator="horizontal"
                                        :dense="true"
                                        v-model:selected="selectedItems"
                                        selection="multiple"
                                        row-key="idescala" 
                                        v-model:pagination="pagination"
                                        hide-bottom
                                        @request="setPagination"
                                        :loading="loading">
                                        <!-- Start of Table Layout -->
                                        <template v-slot:body="props">
                                            <q-tr :class="{selected: isCurrentRecord(props.row)}" :props="props">
                                                <q-td auto-width>
                                                    <q-checkbox dense v-model="props.selected"></q-checkbox>
                                                </q-td>
                                                <q-td key="btnactions" :props="props" auto-width>
                                                    <div class="row q-col-gutter-xs justify-end">
                                                        <q-btn icon="menu" padding="xs" round flat color="grey">
                                                            <q-menu auto-close transition-show="flip-right"  transition-hide="flip-left" self="center middle" anchor="center middle">
                                                                <q-list dense rounded nav>
                                                                    <q-item link clickable v-ripple @click="app.openPageDrawer({ page: 'escala/view', url: `/escala/view/${props.row.idescala}` })">
                                                                        <q-item-section>
                                                                            <q-icon color="primary" size="sm" name="visibility"></q-icon>
                                                                        </q-item-section>
                                                                        <q-item-section>Ver</q-item-section>
                                                                    </q-item>
                                                                    <q-item link clickable v-ripple @click="deleteItem(props.row.idescala)">
                                                                        <q-item-section>
                                                                            <q-icon color="negative" size="sm" name="delete_sweep"></q-icon>
                                                                        </q-item-section>
                                                                        <q-item-section>Borrar</q-item-section>
                                                                    </q-item>
                                                                    <q-item link clickable v-ripple @click="app.openPageDialog({ page:'escala/edicion', url: `/escala/edicion/${props.row.idescala}` , closeBtn: true })">
                                                                        <q-item-section>
                                                                            <q-icon color="primary" size="sm" name="edit"></q-icon>
                                                                        </q-item-section>
                                                                        <q-item-section>Edición</q-item-section>
                                                                    </q-item>
                                                                </q-list>
                                                            </q-menu>
                                                        </q-btn>
                                                    </div>
                                                </q-td>
                                                <q-td auto-width key="masterdetailbtn" :props="props">
                                                    <q-btn @click="setCurrentRecord(props.row)" flat padding="xs" color="primary" no-caps  icon="more_vert">
                                                    </q-btn>
                                                </q-td>
                                                <q-td  key="idescala" :props="props">
                                                    {{ props.row.idescala }}
                                                </q-td>
                                                <q-td  key="habilitado" :props="props">
                                                    <q-icon :class="props.row.habilitado == 'true' ? 'text-positive' : 'text-grey'" size="md" name="check_circle">
                                                    <q-tooltip anchor="top middle" content-class="bg-accent">
                                                    {{ props.row.habilitado }}
                                                    </q-tooltip>
                                                    </q-icon>
                                                </q-td>
                                                <q-td  key="financiero" :props="props">
                                                    {{ props.row.financiero }}
                                                </q-td>
                                                <q-td  key="categoria" :props="props">
                                                    {{ props.row.categoria }}
                                                </q-td>
                                                <q-td  key="normativa_codigo" :props="props">
                                                    {{ props.row.normativa_codigo }}
                                                </q-td>
                                                <q-td  key="nivel" :props="props">
                                                    {{ props.row.nivel }}
                                                </q-td>
                                                <q-td  key="denominacion" :props="props">
                                                    {{ props.row.denominacion }}
                                                </q-td>
                                                <q-td  key="haberbasico" :props="props">
                                                    {{ props.row.haberbasico }}
                                                </q-td>
                                                <q-td  key="numero_items" :props="props">
                                                    {{ props.row.numero_items }}
                                                </q-td>
                                                <q-td  key="costo_mensual" :props="props">
                                                    {{ props.row.costo_mensual }}
                                                </q-td>
                                            </q-tr>
                                        </template>
                                        <!-- End of Table Layout-->
                                        </q-table>
                                        <div class="row justify-center">
                                            <div>Total Haber Básico : <q-chip square class="text-bold">{{totalHaberbasico}}</q-chip></div><q-td></q-td>
                                        </div>
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
                                                        <div>
                                                            <q-btn round flat   no-caps  unelevated   color="negative" @click="deleteItem(selectedItems)" v-if="selectedItems.length" icon="delete_sweep" class="q-my-xs" title="Eliminar seleccionado">
                                                                <q-tooltip>Delete Selected Items</q-tooltip>
                                                            </q-btn>
                                                        </div>
                                                        <div>
                                                            <q-btn v-if="exportButton"    :rounded="false"  no-caps  unelevated   color="accent" class="q-my-xs" @click="exportPage()" label="Exportar"  title="Exportar" icon="print">
                                                            </q-btn>
                                                        </div>
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
			default : 'idescala',
		},
		pageName : {
			type : String,
			default : 'escala',
		},
		routeName : {
			type : String,
			default : 'escalalist',
		},
		apiPath : {
			type : String,
			default : 'escala/index',
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
			default: true,
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
			default: 15,
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
		exportFormats: {
			type: Array,
			default: () => ['excel'],
		},
	});
	
	const app = useApp();
	
	const defaultStoreState = {
		filters: {
			escala_codgestion: {
				value: '',
				valueType: 'single',
				options: [],
			}
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
	const { load,    exportPage, clearSearch,  setPagination, deleteItem, setCurrentRecord, isCurrentRecord, removeFilter, getFilterLabel, filterHasValue,     } = page.methods;
	
	const pageTitle = computed({
		get: function () {
			return "Escala"
		}
	});
	const masterDetailPage = computed(() => defineAsyncComponent(() => import("./detail-pages.vue")));
	const totalHaberbasico = computed(() => records.value.sum("haberbasico"));
	
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
