import { QInput, QSelect, QBtn } from "quasar";
import { boot } from 'quasar/wrappers';
import AutoCompleteSelect from 'components/AutoCompleteSelect.vue';
import PageSearch from 'components/PageSearch.vue';
import QUploaderInput from 'components/QUploaderInput.vue';
import ApiDataSource from 'components/ApiDataSource.vue';
import InlineEdit from 'components/InlineEdit.vue';
import RecordCount from 'components/RecordCount.vue';
import CheckDuplicate from 'components/CheckDuplicate.vue';
import ImageViewer from 'components/ImageViewer.vue';
import FileViewer from 'components/FileViewer.vue';
import FullQEditor from 'components/FullQEditor.vue';
import ImportData from 'components/ImportData.vue';
import LangSwitcher from 'components/LangSwitcher.vue';
import { utils } from './utils';
import { ApiService } from './services/api';
import { StorageService } from './services/storage';
import { AppMenus } from './menus';

export default boot(async ({ app }) => {
	
	app.config.globalProperties.$appName = process.env.APP_NAME;

	const apiUrl = process.env.API_URL; //get the api base url
	app.config.globalProperties.$apiUrl = apiUrl;

	const apiPath = process.env.API_PATH; //get the the api path
	app.config.globalProperties.$apiPath = apiPath;

	//axio api service use for making api request
	app.config.globalProperties.$api = ApiService;

	//save data to localstorage
	app.config.globalProperties.$localStore = StorageService;

	//all application menu
	app.config.globalProperties.$menus = AppMenus;

	app.config.globalProperties.$utils = utils;

	app.component('AutoCompleteSelect', AutoCompleteSelect);
	app.component('PageSearch', PageSearch);
	app.component('InlineEdit', InlineEdit);
	app.component('ApiDataSource', ApiDataSource);
	app.component('QUploaderInput', QUploaderInput);
	app.component('RecordCount', RecordCount);
	app.component('CheckDuplicate', CheckDuplicate);
	app.component('FileViewer', FileViewer);
	app.component('ImageViewer', ImageViewer);
	app.component('FullQEditor', FullQEditor);
	app.component('ImportData', ImportData);
	app.component('LangSwitcher', LangSwitcher);


	//set input default design props
	QInput.props.outlined = {
		type: QInput.props.outlined,
		default: true
	};
	
	QInput.props.dense = {
		type: QInput.props.dense,
		default: true
	};
	QInput.props.clearable = {
		type: QInput.props.clearable,
		default: false
	};
	QInput.props.filled = {
		type: QInput.props.filled,
		default: false
	};
	QInput.props.square = {
		type: QInput.props.square,
		default: false
	};
	QInput.props.rounded = {
		type: QInput.props.rounded,
		default: false
	};

	//set select default design props
	QSelect.props.outlined = {
		type: QSelect.props.outlined,
		default: true
	};
	
	QSelect.props.dense = {
		type: QSelect.props.dense,
		default: true
	};

	QSelect.props.clearable = {
		type: QSelect.props.clearable,
		default: false
	};

	QSelect.props.filled = {
		type: QSelect.props.filled,
		default: false
	};

	QSelect.props.square = {
		type: QSelect.props.square,
		default: false
	};
	QSelect.props.rounded = {
		type: QSelect.props.rounded,
		default: false
	};

	//set button default design props
	QBtn.props.flat = {
		type: QBtn.props.flat,
		default: false
	};
	QBtn.props.glossy = {
		type: QBtn.props.glossy,
		default: false
	};
	QBtn.props.rounded = {
		type: QBtn.props.rounded,
		default: false
	};
	QBtn.props.unelevated = {
		type: QBtn.props.unelevated,
		default: true
	};
	QBtn.props.outline = {
		type: QBtn.props.outline,
		default: false
	};
	QBtn.props.noCaps = {
		type: QBtn.props.noCaps,
		default: true
	};
	QBtn.props.round = {
		type: QBtn.props.round,
		default: false
	};
});