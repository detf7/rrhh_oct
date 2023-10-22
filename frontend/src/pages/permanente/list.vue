<template>
    <main class="main-page" id="">
        <template v-if="showHeader">
            <section class="page-section q-pa-md" >
                <div class="container-fluid">
                    <div class="row justify-between items-center q-col-gutter-md">
                        <div  class="col col-md-auto " >
                            <div class=" text-h6 text-primary" >
                                Permanente
                            </div>
                        </div>
                        <div  class="col-md-auto col-12 " >
                            <q-btn       :rounded="false"  size=""  color="primary" no-caps  unelevated   :to="`/permanente/add`" class="" >
                                <q-icon name="add"></q-icon>                                
                                Agregar nuevo 
                            </q-btn>
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
                                    <q-breadcrumbs-el icon="arrow_back" class="text-capitalize" :label="$route.query.tag" to="/permanente"></q-breadcrumbs-el>
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
                                        :columns="app.menus.PermanenteListHeaderItems" 
                                        :rows="records"
                                        :binary-state-sort="true"
                                        separator="horizontal"
                                        :dense="true"
                                        v-model:selected="selectedItems"
                                        selection="multiple"
                                        row-key="idpermanente" 
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
                                                <q-td auto-width key="masterdetailbtn" :props="props">
                                                    <q-btn @click="setCurrentRecord(props.row)" flat padding="xs" color="primary" no-caps  icon="more_vert">
                                                    </q-btn>
                                                </q-td>
                                                <q-td  key="idpermanente" :props="props">
                                                    <q-btn v-if="props.row.idpermanente" @click="app.openPageDialog({ page: 'cas/list', url: `/cas/index/cas.id_cas/${props.row.idpermanente}` , closeBtn: true, width: '50%' })" padding="xs" flat color="primary" no-caps >
                                                        <q-icon name="add" size="xs"  class="q-mr-xs"></q-icon>  Cas
                                                    </q-btn>
                                                </q-td>
                                                <q-td  key="usuarios_appaterno" :props="props">
                                                    {{ props.row.usuarios_appaterno }}
                                                </q-td>
                                                <q-td  key="usuarios_apmaterno" :props="props">
                                                    {{ props.row.usuarios_apmaterno }}
                                                </q-td>
                                                <q-td  key="usuarios_nombres" :props="props">
                                                    {{ props.row.usuarios_nombres }}
                                                </q-td>
                                                <q-td  key="usuarios_idcarnet" :props="props">
                                                    {{ props.row.usuarios_idcarnet }}
                                                </q-td>
                                                <q-td  key="usuarios_expedido" :props="props">
                                                    {{ props.row.usuarios_expedido }}
                                                </q-td>
                                                <q-td  key="fechaini" :props="props">
                                                    {{ props.row.fechaini }}
                                                </q-td>
                                                <q-td  key="fechafin" :props="props">
                                                    {{ props.row.fechafin }}
                                                </q-td>
                                                <q-td  key="fechabaja" :props="props">
                                                    {{ props.row.fechabaja }}
                                                </q-td>
                                                <q-td  key="vigente" :props="props">
                                                    {{ props.row.vigente }}
                                                </q-td>
                                                <q-td  key="fecha" :props="props">
                                                    {{ props.row.fecha }}
                                                </q-td>
                                                <q-td  key="pagovac" :props="props">
                                                    {{ props.row.pagovac }}
                                                </q-td>
                                                <q-td  key="codunidad" :props="props">
                                                    <q-btn v-if="props.row.codunidad" @click="app.openPageDialog({ page: 'unidad/view', url: `/unidad/view/${props.row.codunidad}` , closeBtn: true })" padding="xs" flat color="primary" no-caps >
                                                        <q-icon name="visibility" size="xs"  class="q-mr-xs"></q-icon>  Unidad
                                                    </q-btn>
                                                </q-td>
                                                <q-td  key="coddetesc" :props="props">
                                                    <q-btn v-if="props.row.coddetesc" @click="app.openPageDialog({ page: 'detescala/view', url: `/detescala/view/${props.row.coddetesc}` , closeBtn: true })" padding="xs" flat color="primary" no-caps >
                                                        <q-icon name="visibility" size="xs"  class="q-mr-xs"></q-icon>  Detescala
                                                    </q-btn>
                                                </q-td>
                                                <q-td  key="codpermanente" :props="props">
                                                    <q-btn v-if="props.row.codpermanente" @click="app.openPageDialog({ page: 'permanente/view', url: `/permanente/view/${props.row.codpermanente}` , closeBtn: true })" padding="xs" flat color="primary" no-caps >
                                                        <q-icon name="visibility" size="xs"  class="q-mr-xs"></q-icon>  Permanente
                                                    </q-btn>
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
                                                <q-td  key="codevaluacion" :props="props">
                                                    <q-btn v-if="props.row.codevaluacion" @click="app.openPageDialog({ page: 'evaluacion/view', url: `/evaluacion/view/${props.row.codevaluacion}` , closeBtn: true })" padding="xs" flat color="primary" no-caps >
                                                        <q-icon name="visibility" size="xs"  class="q-mr-xs"></q-icon>  Evaluacion
                                                    </q-btn>
                                                </q-td>
                                                <q-td  key="glosa" :props="props">
                                                    {{ props.row.glosa }}
                                                </q-td>
                                                <q-td  key="codusuario" :props="props">
                                                    <q-btn v-if="props.row.codusuario" @click="app.openPageDialog({ page: 'usuarios/view', url: `/usuarios/view/${props.row.codusuario}` , closeBtn: true })" padding="xs" flat color="primary" no-caps >
                                                        <q-icon name="visibility" size="xs"  class="q-mr-xs"></q-icon>  Usuarios
                                                    </q-btn>
                                                </q-td>
                                                <q-td  key="cargopla" :props="props">
                                                    {{ props.row.cargopla }}
                                                </q-td>
                                                <q-td key="btnactions" :props="props" auto-width>
                                                    <div class="row q-col-gutter-xs justify-end">
                                                        <q-btn icon="menu" padding="xs" round flat color="grey">
                                                            <q-menu auto-close transition-show="flip-right"  transition-hide="flip-left" self="center middle" anchor="center middle">
                                                                <q-list dense rounded nav>
                                                                    <q-item link clickable v-ripple :to="`/permanente/view/${props.row.idpermanente}`">
                                                                        <q-item-section>
                                                                            <q-icon color="primary" size="sm" name="visibility"></q-icon>
                                                                        </q-item-section>
                                                                        <q-item-section>View</q-item-section>
                                                                    </q-item>
                                                                    <q-item link clickable v-ripple :to="`/permanente/edit/${props.row.idpermanente}`">
                                                                        <q-item-section>
                                                                            <q-icon color="positive" size="sm" name="edit"></q-icon>
                                                                        </q-item-section>
                                                                        <q-item-section>Edit</q-item-section>
                                                                    </q-item>
                                                                    <q-item link clickable v-ripple @click="deleteItem(props.row.idpermanente)">
                                                                        <q-item-section>
                                                                            <q-icon color="negative" size="sm" name="delete_sweep"></q-icon>
                                                                        </q-item-section>
                                                                        <q-item-section>Delete</q-item-section>
                                                                    </q-item>
                                                                </q-list>
                                                            </q-menu>
                                                        </q-btn>
                                                    </div>
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
			default : 'idpermanente',
		},
		pageName : {
			type : String,
			default : 'permanente',
		},
		routeName : {
			type : String,
			default : 'permanentelist',
		},
		apiPath : {
			type : String,
			default : 'permanente/index',
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
			return "Permanente"
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
