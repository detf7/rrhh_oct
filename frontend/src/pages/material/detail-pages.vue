<template>
    <div id="master-detailpage">
        <q-tabs  inline-label v-model="selectedTab" active-color="primary" indicator-color="primary" align="left">
            <q-tab no-caps name="detallecompra" icon="extension" label="Material Detallecompra" />
        </q-tabs>
        <q-separator></q-separator>
        <q-tab-panels keep-alive v-model="selectedTab" animated>
            <q-tab-panel class="q-pa-none" name="detallecompra">
                <div class="reset-grid">
                    <list-detallecompra-page ref="detallecompraListPage"  field-name="detallecompra.codmaterial" :field-value="masterRecord.idmaterial" :show-header="false" isSubPage>
                        </list-detallecompra-page>
                    </div>
                </q-tab-panel>
            </q-tab-panels>
        </div>
</template>
<script setup>
import { watch, computed, ref, onMounted } from 'vue';
import { usePageStore } from 'src/stores/page';
import { useApp } from 'src/composables/app.js';
import listDetallecompraPage from "../detallecompra/list.vue";
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
const store = usePageStore('material');
const masterRecord = computed(() => store.state.currentRecord);
const pageReady = computed(() => masterRecord.value != null);
const selectedTab = ref("detallecompra");
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
	 
	// set detallecompra form data
	const detallecompraStore = usePageStore('detallecompra');
	detallecompraStore.setFormData({ codmaterial:record?.idmaterial });
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
