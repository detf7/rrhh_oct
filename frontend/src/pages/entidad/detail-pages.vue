<template>
    <div id="master-detailpage">
        <q-tabs  inline-label v-model="selectedTab" active-color="primary" indicator-color="primary" align="left">
            <q-tab no-caps name="entidad" icon="extension" label="Entidad Entidad" />
            <q-tab no-caps name="unidad" icon="extension" label="Entidad Unidad" />
        </q-tabs>
        <q-separator></q-separator>
        <q-tab-panels keep-alive v-model="selectedTab" animated>
            <q-tab-panel class="q-pa-none" name="entidad">
                <div class="reset-grid">
                    <list-entidad-page ref="entidadListPage"  field-name="entidad.dependencia" :field-value="masterRecord.identidad" :show-header="false" isSubPage>
                        </list-entidad-page>
                    </div>
                </q-tab-panel>
                <q-tab-panel class="q-pa-none" name="unidad">
                    <div class="reset-grid">
                        <list-unidad-page ref="unidadListPage"  field-name="unidad.codentidad" :field-value="masterRecord.identidad" :show-header="false" isSubPage>
                            </list-unidad-page>
                        </div>
                    </q-tab-panel>
                </q-tab-panels>
            </div>
</template>
<script setup>
import { watch, computed, ref, onMounted } from 'vue';
import { usePageStore } from 'src/stores/page';
import { useApp } from 'src/composables/app.js';
import listEntidadPage from "../entidad/list.vue";
import listUnidadPage from "../unidad/list.vue";
const props = defineProps({
	isSubPage: {
		type : Boolean,
		default : true,
	},
	scrollIntoView: {
		type : Boolean,
		default : false,
	},
});
const app = useApp();
const store = usePageStore('entidad');
const masterRecord = computed(() => store.state.currentRecord);
const pageReady = computed(() => masterRecord.value != null);
const selectedTab = ref("entidad");
function scrollToDetailPage() {
	if (props.scrollIntoView) {
		const pageElement = document.getElementById('master-detailpage');
		if(pageElement){
			pageElement.scrollIntoView({behavior:'smooth', block:'start'});
		}
	}
}
// pass form data from master to detail
function setDetailPageFormData(){
	const record = masterRecord.value;
	 
	// set entidad form data
	const entidadStore = usePageStore('entidad');
	entidadStore.setFormData({ dependencia:record?.identidad });
	 
	// set unidad form data
	const unidadStore = usePageStore('unidad');
	unidadStore.setFormData({ codentidad:record?.identidad });
}
watch(() => masterRecord, (current) => {
		setDetailPageFormData();
		scrollToDetailPage();
	},
	{ deep: true, immediate: true }
);
onMounted(()=>{
    scrollToDetailPage();
});
</script>
