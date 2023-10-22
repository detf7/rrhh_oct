<template>
    <div id="master-detailpage">
        <q-tabs  inline-label v-model="selectedTab" active-color="primary" indicator-color="primary" align="left">
            <q-tab no-caps name="permissions" icon="extension" label="Roles Permissions" />
            <q-tab no-caps name="users" icon="extension" label="Roles Users" />
        </q-tabs>
        <q-separator></q-separator>
        <q-tab-panels keep-alive v-model="selectedTab" animated>
            <q-tab-panel class="q-pa-none" name="permissions">
                <div class="reset-grid">
                    <list-permissions-page ref="permissionsListPage"  field-name="permissions.role_id" :field-value="masterRecord.role_id" :show-header="false" isSubPage>
                        </list-permissions-page>
                    </div>
                </q-tab-panel>
                <q-tab-panel class="q-pa-none" name="users">
                    <div class="reset-grid">
                        <list-users-page ref="usersListPage"  field-name="users.user_role_id" :field-value="masterRecord.role_id" :show-header="false" isSubPage>
                            </list-users-page>
                        </div>
                    </q-tab-panel>
                </q-tab-panels>
            </div>
</template>
<script setup>
import { watch, computed, ref, onMounted } from 'vue';
import { usePageStore } from 'src/stores/page';
import { useApp } from 'src/composables/app.js';
import listPermissionsPage from "../permissions/list.vue";
import listUsersPage from "../users/list.vue";
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
const store = usePageStore('roles');
const masterRecord = computed(() => store.state.currentRecord);
const pageReady = computed(() => masterRecord.value != null);
const selectedTab = ref("permissions");
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
	 
	// set permissions form data
	const permissionsStore = usePageStore('permissions');
	permissionsStore.setFormData({ role_id:record?.role_id });
	 
	// set users form data
	const usersStore = usePageStore('users');
	usersStore.setFormData({ user_role_id:record?.role_id });
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
