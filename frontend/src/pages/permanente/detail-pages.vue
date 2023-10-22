<template>
    <div id="master-detailpage">
        <q-tabs  inline-label v-model="selectedTab" active-color="primary" indicator-color="primary" align="left">
            <q-tab no-caps name="cas" icon="extension" label="Permanente Cas" />
            <q-tab no-caps name="permanente" icon="extension" label="Permanente Permanente" />
        </q-tabs>
        <q-separator></q-separator>
        <q-tab-panels keep-alive v-model="selectedTab" animated>
            <q-tab-panel class="q-pa-none" name="cas">
                <div class="reset-grid">
                    <list-cas-page ref="casListPage"  field-name="cas.idpermanente" :field-value="masterRecord.idpermanente" :show-header="false" isSubPage>
                        </list-cas-page>
                    </div>
                </q-tab-panel>
                <q-tab-panel class="q-pa-none" name="permanente">
                    <div class="reset-grid">
                        <list-permanente-page ref="permanenteListPage"  field-name="permanente.codpermanente" :field-value="masterRecord.idpermanente" :show-header="false" isSubPage>
                            </list-permanente-page>
                        </div>
                    </q-tab-panel>
                </q-tab-panels>
            </div>
</template>
<script setup>
import { watch, computed, ref, onMounted } from 'vue';
import { usePageStore } from 'src/stores/page';
import { useApp } from 'src/composables/app.js';
import listCasPage from "../cas/list.vue";
import listPermanentePage from "../permanente/list.vue";
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
const store = usePageStore('permanente');
const masterRecord = computed(() => store.state.currentRecord);
const pageReady = computed(() => masterRecord.value != null);
const selectedTab = ref("cas");
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
	 
	// set cas form data
	const casStore = usePageStore('cas');
	casStore.setFormData({ idpermanente:record?.idpermanente });
	 
	// set permanente form data
	const permanenteStore = usePageStore('permanente');
	permanenteStore.setFormData({ codpermanente:record?.idpermanente });
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
