<template>
    <main class="main-page" id="">






        <section class="page-section " >



            <div class="container-fluid">
                <div class="row q-col-gutter-x-md">
                    <div  class="col comp-grid" >

                        <div >
                            <template v-if="showBreadcrumbs && $route.query.tag">
                                <q-breadcrumbs class="q-pa-md">
                                    <q-breadcrumbs-el icon="arrow_back" class="text-capitalize" :label="$route.query.tag" to="/estructura_org"></q-breadcrumbs-el>
                                    <q-breadcrumbs-el :label="$route.query.label"></q-breadcrumbs-el>
                                </q-breadcrumbs>
                            </template>
                            <!-- page records template -->
                            <div >
                                <q-table
                                :flat="true"
                                table-header-class="text-h4 bg-grey-2"
                                :bordered="false"
                                :columns="app.menus.EstructuraOrgVistaHeaderItems"
                                :rows="records"
                                :binary-state-sort="true"
                                separator="horizontal"
                                :dense="true"
                                v-model:selected="selectedItems"
                                selection="multiple"
                                row-key="idunidad"
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

                                        <q-td  key="idunidad" :props="props">
                                            <q-btn padding="xs"   :rounded="false"  color="primary"  no-caps  unelevated   flat :to="`/estructura_org/view/${props.row.idunidad}`">{{ props.row.idunidad }}</q-btn>
                                        </q-td>
                                        <q-td  key="nivel" :props="props">
                                            {{ props.row.nivel }}
                                        </q-td>
                                        <q-td  key="dependencia" :props="props">
                                            {{ props.row.dependencia }}
                                        </q-td>
                                        <q-td  key="codentidad" :props="props">
                                            {{ props.row.codentidad }}
                                        </q-td>
                                        <q-td  key="codgestion" :props="props">
                                            {{ props.row.codgestion }}
                                        </q-td>
                                        <q-td  key="descripcion" :props="props">
                                            {{ props.row.descripcion }}
                                        </q-td>
                                        <q-td  key="soa" :props="props">
                                            {{ props.row.soa }}
                                        </q-td>
                                        <q-td  key="sigla" :props="props">
                                            {{ props.row.sigla }}
                                        </q-td>
                                        <q-td  key="ley" :props="props">
                                            {{ props.row.ley }}
                                        </q-td>
                                        <q-td  key="glosa" :props="props">
                                            {{ props.row.glosa }}
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
                        </div>


                    </div>
                </div>
            </div>


        </section>


                <section class="page-section">
                    <div>
                        <organization-chart :datasource="ds"></organization-chart>
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

    import OrganizationChart from 'vue3-organization-chart'
    import 'vue3-organization-chart/dist/orgchart.css'

	const props = defineProps({
		primaryKey : {
			type : String,
			default : 'idunidad',
		},
		pageName : {
			type : String,
			default : 'estructura_org',
		},
		routeName : {
			type : String,
			default : 'estructura_orgvista',
		},
		apiPath : {
			type : String,
			default : 'estructura_org/vista',
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

    const components = {
        OrganizationChart
    };

    // Define la estructura de datos para el componente OrganizationChart
    const ds = {
        "id": "1",
        "name": "Lao Lao",
        "title": "general manager",
        "children": [
            { "id": "2", "name": "Bo Miao", "title": "department manager" },
            { "id": "3", "name": "Su Miao", "title": "department manager",
                "children": [
                    { "id": "4", "name": "Tie Hua", "title": "senior engineer" },
                    { "id": "5", "name": "Hei Hei", "title": "senior engineer",
                        "children": [
                            { "id": "6", "name": "Pang Pang", "title": "engineer" },
                            { "id": "7", "name": "Xiang Xiang", "title": "UE engineer" }
                        ]
                    }
                ]
            },
            { "id": "8", "name": "Hong Miao", "title": "department manager" },
            { "id": "9", "name": "Chun Miao", "title": "department manager" }
        ]
    };

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
			return "Estructura Org"
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
.hero {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.hero .lead {
    font-weight: 200;
    font-size: 1.5rem;
}
</style>
