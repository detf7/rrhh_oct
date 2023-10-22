<template>
    <div id="master-detailpage">
        <q-tabs  inline-label v-model="selectedTab" active-color="primary" indicator-color="primary" align="left">
            <q-tab no-caps name="declaracion_pregunta_usuario" icon="extension" label="Declaraciones Declaracion Pregunta Usuario" />
        </q-tabs>
        <q-separator></q-separator>
        <q-tab-panels keep-alive v-model="selectedTab" animated>
            <q-tab-panel class="q-pa-none" name="declaracion_pregunta_usuario">
                <div class="reset-grid">
                    <list-declaracionpreguntausuario-page ref="declaracionPreguntaUsuarioListPage"  field-name="declaracion_pregunta_usuario.iddeclaracion" :field-value="masterRecord.iddeclaracion" :show-header="false" isSubPage>
                        </list-declaracionpreguntausuario-page>
                    </div>
                </q-tab-panel>
            </q-tab-panels>
        </div>
</template>
<script setup>
import { watch, computed, ref, onMounted } from 'vue';
import { usePageStore } from 'src/stores/page';
import { useApp } from 'src/composables/app.js';
import listDeclaracionpreguntausuarioPage from "../declaracion_pregunta_usuario/list.vue";
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
const store = usePageStore('declaraciones');
const masterRecord = computed(() => store.state.currentRecord);
const pageReady = computed(() => masterRecord.value != null);
const selectedTab = ref("declaracion_pregunta_usuario");
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
	 
	// set declaracion_pregunta_usuario form data
	const declaracionPreguntaUsuarioStore = usePageStore('declaracion_pregunta_usuario');
	declaracionPreguntaUsuarioStore.setFormData({ iddeclaracion:record?.iddeclaracion });
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
