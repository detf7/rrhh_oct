<template>
    <div id="master-detailpage">
        <q-tabs  inline-label v-model="selectedTab" active-color="primary" indicator-color="primary" align="left">
            <q-tab no-caps name="plarefrigerio" icon="extension" label="Planillas Plarefrigerio" />
        </q-tabs>
        <q-separator></q-separator>
        <q-tab-panels keep-alive v-model="selectedTab" animated>
            <q-tab-panel class="q-pa-none" name="plarefrigerio">
                <div class="reset-grid">
                    <list-plarefrigerio-page ref="plarefrigerioListPage"  field-name="plarefrigerio.codpla" :field-value="masterRecord.idpla" :show-header="false" isSubPage>
                        </list-plarefrigerio-page>
                    </div>
                </q-tab-panel>
            </q-tab-panels>
        </div>
</template>
<script setup>
import { watch, computed, ref, onMounted } from 'vue';
import { usePageStore } from 'src/stores/page';
import { useApp } from 'src/composables/app.js';
import listPlarefrigerioPage from "../plarefrigerio/list.vue";
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
const store = usePageStore('planillas');
const masterRecord = computed(() => store.state.currentRecord);
const pageReady = computed(() => masterRecord.value != null);
const selectedTab = ref("plarefrigerio");
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
	 
	// set plarefrigerio form data
	const plarefrigerioStore = usePageStore('plarefrigerio');
	plarefrigerioStore.setFormData({ codpla:record?.idpla });
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
