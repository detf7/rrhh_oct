<template>
	<div class="q-mb-sm">
		<q-select v-bind="$attrs" :use-input="useInput" emit-value map-options :options="optionsItems" @filter="filter"
			v-model="model">
			<template v-slot:option="scope">
				<q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
					<q-item-section v-if="scope.opt.image" avatar>
						<image-viewer :src="scope.opt.image" image-size="small"></image-viewer>
					</q-item-section>
					<q-item-section>
						<q-item-label class="text-bold">{{ scope.opt.label }}</q-item-label>
						<q-item-label v-if="scope.opt.caption" caption>{{ scope.opt.caption }}</q-item-label>
					</q-item-section>
				</q-item>
			</template>

			<template v-slot:selected-item="scope">
				<q-item class="dense-item" v-if="scope.opt">
					<q-item-section v-if="scope.opt.image" avatar>
						<image-viewer :src="scope.opt.image" image-size="small"></image-viewer>
					</q-item-section>
					<q-item-section>
						<q-item-label class="text-bold">{{ scope.opt.label }}</q-item-label>
						<q-item-label v-if="scope.opt.caption" caption>{{ scope.opt.caption }}</q-item-label>
					</q-item-section>
				</q-item>
			</template>

			<template v-slot:no-option>
				<q-item>
					<q-item-section class="text-grey">
						No results
					</q-item-section>
				</q-item>
			</template>

			<template v-slot:prepend>
				<slot name="prepend"></slot>
			</template>

			<template v-slot:append>
				<slot name="append"></slot>
			</template>
		</q-select>
	</div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { ApiService } from 'src/services/api';

const props = defineProps({
	apiPath: {
		type: String,
		default: ''
	},

	useInput: {
		type: Boolean,
		default: false
	},
	modelValue: String,
	options: {
		type: Array,
		default: () => []
	}
});
const ctrl = ref(null);
const emit = defineEmits(['update:modelValue'])

const loading = ref(false)
const optionsItems = ref([]);

const model = computed({
	get() {
		return props.modelValue
	},
	set(value) {
		return emit('update:modelValue', value)
	}
});

async function filter(val, update, abort) {
	try {
		if (props.apiPath && props.useInput) {
			if (!val) {
				return abort()
			}
			loading.value = true;
			let qs = encodeURIComponent(val);
			let url = `${props.apiPath}?search=${qs}`;
			const response = await ApiService.get(url);
			update(
				() => {
					optionsItems.value = response.data;
				}
			);
			loading.value = false;
		}
		else {
			update(
				() => {
					optionsItems.value = props.options.filter(item => {
						val = val.toLocaleLowerCase();
						if (item.value) {
							return String(item.label).toLocaleLowerCase().includes(val) || String(item.value).includes(val)
						}
						return String(item).toLocaleLowerCase().includes(val);
					});
				}
			);
		}
	}
	catch (ex) {
		console.log(ex);
		loading.value = false;
	}
}

function updateOptions() {
	if (props.options) {
		optionsItems.value = props.options;
	}
}

onMounted(() => {
	updateOptions();
});

watch(() => props.options, () => {
	updateOptions();
});

</script>

<style>
.dense-item {
	padding: 0;
	min-height: auto;
}
</style>