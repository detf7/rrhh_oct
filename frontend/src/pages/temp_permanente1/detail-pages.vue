<template>
    <div id="master-detailpage">
        <q-list>
            <q-expansion-item group="temp_permanente1-detail-pages" default-opened label="Temp Permanente1 Temp Cas1" icon="extension" expand-separator header-class="text-bold text-body2">
                <q-card>
                <q-card-section>
                    <div class="reset-grid">
                        <list-tempcas1-page ref="tempCas1ListPage"  field-name="temp_cas1.id_permanente" :field-value="masterRecord.id_permanente" :show-header="false" isSubPage>
                            </list-tempcas1-page>
                        </div>
                    </q-card-section>
                </q-card>
            </q-expansion-item>
            <q-separator />
        </q-list>
    </div>
</template>
<script setup>
import { watch, computed, ref, onMounted } from 'vue';
import { usePageStore } from 'src/stores/page';
import { useApp } from 'src/composables/app.js';
import listTempcas1Page from "../temp_cas1/list.vue";
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
const store = usePageStore('temppermanente1');
const masterRecord = computed(() => store.state.currentRecord);
const pageReady = computed(() => masterRecord.value != null);
const selectedTab = ref("default-opened");
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
	 
	// set temp_cas1 form data
	const tempCas1Store = usePageStore('temp_cas1');
	tempCas1Store.setFormData({ id_permanente:record?.id_permanente });
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
