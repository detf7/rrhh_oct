<template>
    <main class="main-page" id="">
        <template v-if="showHeader">
            <section class="page-section q-pa-md" >
                <div class="container-fluid">
                    <div class="row justify-between items-center q-col-gutter-md">
                        <div  class="col col-md-auto " >
                            <div class=" text-h6 text-primary" >
                                Escala Maestra
                            </div>
                        </div>
                        <div  class="col-md-auto col-12 " >
                            <q-btn       :rounded="false"  size=""  color="primary" no-caps  unelevated   :to="`/denominacion/add`" class="" >
                                <q-icon name="add"></q-icon>                                
                                Agregar nuevo 
                            </q-btn>
                        </div>
                        <div  class="col-md-auto col-12 comp-grid" >
                            <q-card  :flat="isSubPage" class=" nice-shadow-16">
                                <api-data-source @loaded="(response)=> filters.denominacion_fuente.options=response"  api-path="components_data/denominacion_fuente_option_list"  v-slot="req">
                                    <div class=" row wrap items-center justify-between">
                                        <div class="q-mb-sm text-bold text-primary" >
                                            Fuente
                                        </div>
                                        <div>
                                            <q-btn-toggle  no-caps glossy unelevated v-model="filters.denominacion_fuente.value" toggle-color="primary" :options="filters.denominacion_fuente.options" />
                                        </div>
                                    </div>
                                </api-data-source>
                            </q-card>
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
                            <div class="q-px-sm nice-shadow-16" v-if="filterHasValue(filters.denominacion_fuente)">
                                <strong>Fuente</strong>
                                <q-chip removable @remove="removeFilter(filters.denominacion_fuente)"  :label="getFilterLabel(filters.denominacion_fuente)">
                                </q-chip>
                            </div>
                        </div>
                        <div >
                            <template v-if="showBreadcrumbs && $route.query.tag">
                                <q-breadcrumbs class="q-pa-md">
                                    <q-breadcrumbs-el icon="arrow_back" class="text-capitalize" :label="$route.query.tag" to="/denominacion"></q-breadcrumbs-el>
                                    <q-breadcrumbs-el :label="$route.query.label"></q-breadcrumbs-el>
                                </q-breadcrumbs>
                            </template>
                            <!-- page records template -->
                            <div >
                                <q-table 
                                :flat="true"
                                table-header-class="text-h4 bg-grey-2"
                                :bordered="false"
                                :columns="app.menus.DenominacionListHeaderItems" 
                                :rows="records"
                                :binary-state-sort="true"
                                separator="horizontal"
                                :dense="true"
                                v-model:selected="selectedItems"
                                selection="multiple"
                                row-key="id_denominacion" 
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
                                                            <q-item link clickable v-ripple :to="`/denominacion/edit/${props.row.id_denominacion}`">
                                                                <q-item-section>
                                                                    <q-icon color="positive" size="sm" name="edit"></q-icon>
                                                                </q-item-section>
                                                                <q-item-section>Editar</q-item-section>
                                                            </q-item>
                                                            <q-item link clickable v-ripple @click="deleteItem(props.row.id_denominacion)">
                                                                <q-item-section>
                                                                    <q-icon color="negative" size="sm" name="delete_sweep"></q-icon>
                                                                </q-item-section>
                                                                <q-item-section>Borrar</q-item-section>
                                                            </q-item>
                                                            <q-item link clickable v-ripple :to="`/denominacion/vista`">
                                                                <q-item-section>
                                                                    <q-icon color="primary" size="sm" name="pageview"></q-icon>
                                                                </q-item-section>
                                                                <q-item-section>Vista</q-item-section>
                                                            </q-item>
                                                        </q-list>
                                                    </q-menu>
                                                </q-btn>
                                            </div>
                                        </q-td>
                                        <q-td  key="fuente" :props="props">
                                            <span class="table-inlined-edit">{{ props.row.fuente }}</span>
                                            <inline-edit v-model="props.row.fuente" save-icon="check_circle" cancel-icon="close" :url="`denominacion/edit/${ props.row.id_denominacion }`" field-name="fuente" field-label="Fuente" title="Escribir Fuente">
                                            <q-input   ref="listctrlfuente" v-model.trim="props.row.fuente"  label=""  placeholder=""      
                                            class="" >
                                            </q-input>
                                            </inline-edit>
                                        </q-td>
                                        <q-td  key="nivel_denom" :props="props">
                                            {{ props.row.nivel_denom }}
                                        </q-td>
                                        <q-td  key="desc_denominacion" :props="props">
                                            {{ props.row.desc_denominacion }}
                                        </q-td>
                                        <q-td  key="haber_basico" :props="props">
                                            {{ props.row.haber_basico }}
                                        </q-td>
                                        <q-td  key="nro_items" :props="props">
                                            <span class="table-inlined-edit">{{ props.row.nro_items }}</span>
                                            <inline-edit v-model="props.row.nro_items" save-icon="check_circle" cancel-icon="close" :url="`denominacion/edit/${ props.row.id_denominacion }`" field-name="nro_items" field-label="Nro Items" title="Escribir Nro Items">
                                            <q-input   ref="listctrlnro_items" v-model.trim="props.row.nro_items"  label=""  placeholder=""      
                                            class="" >
                                            </q-input>
                                            </inline-edit>
                                        </q-td>
                                        <q-td  key="costo_mensual" :props="props">
                                            <span class="table-inlined-edit">{{ props.row.costo_mensual }}</span>
                                            <inline-edit v-model="props.row.costo_mensual" save-icon="check_circle" cancel-icon="close" :url="`denominacion/edit/${ props.row.id_denominacion }`" field-name="costo_mensual" field-label="Costo Mensual" title="Escribir Costo Mensual">
                                            <q-input   ref="listctrlcosto_mensual" v-model.trim="props.row.costo_mensual"  label=""  placeholder=""      
                                            class="" >
                                            </q-input>
                                            </inline-edit>
                                        </q-td>
                                        <q-td  key="estado" :props="props">
                                            <span class="table-inlined-edit">{{ props.row.estado }}</span>
                                            <inline-edit v-model="props.row.estado" save-icon="check_circle" cancel-icon="close" :url="`denominacion/edit/${ props.row.id_denominacion }`" field-name="estado" field-label="Estado" title="Escribir Estado">
                                            <q-input   ref="listctrlestado" v-model.trim="props.row.estado"  label=""  placeholder=""      
                                            class="" >
                                            </q-input>
                                            </inline-edit>
                                        </q-td>
                                        <q-td  key="categoria" :props="props">
                                            <span class="table-inlined-edit">{{ props.row.categoria }}</span>
                                            <inline-edit v-model="props.row.categoria" save-icon="check_circle" cancel-icon="close" :url="`denominacion/edit/${ props.row.id_denominacion }`" field-name="categoria" field-label="Categoria" title="Escribir Categoria">
                                            <q-input   ref="listctrlcategoria" v-model.trim="props.row.categoria"  label=""  placeholder=""      
                                            class="" >
                                            </q-input>
                                            </inline-edit>
                                        </q-td>
                                    </q-tr>
                                </template>
                                <!-- End of Table Layout-->
                                </q-table>
                                <div class="row justify-center">
                                    <q-td></q-td>
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
                    <div  class="col-12 comp-grid" >
                        <q-btn       :rounded="false"  size=""  color="primary" no-caps  unelevated   :to="`/denominacion/imprimir`" class="" >
                            Imprimir 
                        </q-btn>
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
			default : 'id_denominacion',
		},
		pageName : {
			type : String,
			default : 'denominacion',
		},
		routeName : {
			type : String,
			default : 'denominacionlist',
		},
		apiPath : {
			type : String,
			default : 'denominacion/index',
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
			denominacion_fuente: {
				value: 10,
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
	
	const {records, filters,  totalRecords,  selectedItems, expandedRows, pagination,} = toRefs(store.state);
	const { pageReady, loading, searchText, } = toRefs(page.state);
	
	const {     totalPages, recordsPosition, } = page.computedProps;
	
	//page methods
	const { load,     clearSearch,  setPagination, deleteItem,  isCurrentRecord, removeFilter, getFilterLabel, filterHasValue,     } = page.methods;
	
	const pageTitle = computed({
		get: function () {
			return "Escala Maestra"
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
