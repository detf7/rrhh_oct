<template>
    <div id="master-detailpage">
        <q-tabs  inline-label v-model="selectedTab" active-color="primary" indicator-color="primary" align="left">
            <q-tab no-caps name="unidad" icon="extension" label="Permanentes Unidad" />
            <q-tab no-caps name="cas" icon="extension" label="Permanentes Cas" />
        </q-tabs>
        <q-separator></q-separator>
        <q-tab-panels keep-alive v-model="selectedTab" animated>
            <q-tab-panel class="q-pa-none" name="unidad">
                <div class="reset-grid">
                    <list-unidad-page ref="unidadListPage"  field-name="unidad.idunidad" :field-value="masterRecord.codunidad" :show-header="false" isSubPage>
                        </list-unidad-page>
                    </div>
                </q-tab-panel>
                <q-tab-panel class="q-pa-none" name="cas">
                    <div class="reset-grid">
                        <list-cas-page ref="casListPage"  field-name="cas.idpermanente" :field-value="masterRecord.idpermanente" :show-header="true" isSubPage>
                            </list-cas-page>
                        </div>
                    </q-tab-panel>
                </q-tab-panels>
            </div>
</template>
<script setup>
import { watch, computed, ref, onMounted } from 'vue';
import { usePageStore } from 'src/stores/page';
import { useApp } from 'src/composables/app.js';
import listUnidadPage from "../unidad/list.vue";
import listCasPage from "../cas/list.vue";
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
const store = usePageStore('permanentes');
const masterRecord = computed(() => store.state.currentRecord);
const pageReady = computed(() => masterRecord.value != null);
const selectedTab = ref("unidad");
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
	 
	// set unidad form data
	const unidadStore = usePageStore('unidad');
	unidadStore.setFormData({  });
	 
	// set cas form data
	const casStore = usePageStore('cas');
	casStore.setFormData({ id_cas:record?.id_cas });
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
