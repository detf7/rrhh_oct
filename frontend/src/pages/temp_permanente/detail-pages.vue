<template>
    <div id="master-detailpage">
        <div class="q-my-md">
            <div class="reset-grid">
                <list-tempcas-page ref="tempCasListPage"  field-name="temp_cas.id_permanente" :field-value="masterRecord.id_permanente" :show-header="true" isSubPage>
                    </list-tempcas-page>
                </div>
            </div>
        </div>
</template>
<script setup>
import { watch, computed, ref, onMounted } from 'vue';
import { usePageStore } from 'src/stores/page';
import { useApp } from 'src/composables/app.js';
import listTempcasPage from "../temp_cas/list.vue";
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
const store = usePageStore('temppermanente');
const masterRecord = computed(() => store.state.currentRecord);
const pageReady = computed(() => masterRecord.value != null);
const selectedTab = ref("");
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
	 
	// set temp_cas form data
	const tempCasStore = usePageStore('temp_cas');
	tempCasStore.setFormData({ id_permanente:record?.id_permanente });
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
