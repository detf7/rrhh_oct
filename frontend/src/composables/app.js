import { useAppStore } from 'src/stores/app';
import { useRoute, useRouter } from 'vue-router';
import { AppMenus as menus } from 'src/menus';
import { utils } from 'src/utils';
import { ApiService } from 'src/services/api';

import { useQuasar } from "quasar";
export function useApp() {
	const store = useAppStore();
	const route = useRoute();
	const router = useRouter();
	const $q = useQuasar();

	function isDialogOpen(){
		return store.isDialogOpen;
	}
	function isDesktop() {
		return window.innerWidth >= 992;
	}
	
	function openImageDialog (pageData) {
		store.openImageDialog(pageData);
	}

	function openFullScreenLoading (msg) {
		store.openFullScreenLoading(msg);
	}

	function openPageDialog (pageData) {
		store.openPageDialog(pageData);
	}

	function openPageDrawer (pageData) {
		store.openPageDrawer(pageData);
	}
	
	function closeDialogs () {
		store.closeDialogs();
	}

	function setPageTitle (pageName, title) {
		if(pageName == route.name && title){
			document.title = title
		}
	}

	function flashMsg(title, detail = null, type = 'positive', position = 'top') {
		if(title){
			$q.notify({
				message: title,
				caption: detail,
				position,
				type,
				timeout: 3000
			});
		}
	}

	function navigateTo (path) {
		if(path && route.path !== path){
			router.push(path)
		}
	}

	function showPageRequestError(error) {
		console.error(error);
		const xhrRequest = error?.request;
		const defaultMsg = "¡Error al procesar la solicitud!";  // if error is not a api request error.
		let errorMsgs = [defaultMsg];
		if (xhrRequest) {
			let errorData = xhrRequest.response;
			if (typeof (errorData) === 'string') {
				try {
					// if error message is valid json data
					errorData = JSON.parse(errorData);
				}
				catch (ex) {
					//not a valid json. Display as simple message
					//console.error(ex);
				}
			}
			if (Array.isArray(errorData)) {
				errorMsgs = errorData;
			}
			else if (typeof (errorData) === 'object') {
				errorMsgs = Object.values(errorData);
			}
			else {
				errorMsgs = [errorData.toString()]
			}
		}
		store.showPageErrors(errorMsgs);
		if (xhrRequest?.status == 401) { //token might have expired
			//logout user and navigate to login page
			//startLogOut();
			location.href = "/";
		}
	}

	function exportPageRecords (pageExportFormats, currentPageUrl, pageName) {
		let actions = [];
		pageExportFormats.forEach(format => {
			actions.push(menus.exportFormats[format]);
		});

		let message = "Exportar";
		$q.bottomSheet({
			message,
			grid: false,
			actions
		}).onOk(action => {
			let selectedExport = menus.exportFormats[action.id];
			let queryParam = {
				export: action.id
			}
			let exportUrl = utils.setApiPath(currentPageUrl, queryParam);
			let fileName = `${utils.dateNow()}-${pageName}.${selectedExport.ext}`;
			$q.loading.show();
			ApiService.download(exportUrl).then((response) => {
				const url = window.URL.createObjectURL(new Blob([response.data]));
				const link = document.createElement('a');
				link.href = url;
				link.setAttribute('download', fileName);
				document.body.appendChild(link);
				link.click();
				link.remove();
				$q.loading.hide();
			},
			(error) => {
				$q.loading.hide();
				console.error(error);
				alert("Unable to download file")
			});
		}).onCancel(() => {
			// console.log('Dismissed')
		}).onDismiss(() => {
			// console.log('I am triggered on both OK and Cancel')
		})
	}

	return {
		isDialogOpen,
		isDesktop,
		openFullScreenLoading,
		openImageDialog,
		openPageDialog,
		openPageDrawer,
		closeDialogs,
		setPageTitle,
		flashMsg,
		navigateTo,
		exportPageRecords,
		showPageRequestError,
		menus
	}
}