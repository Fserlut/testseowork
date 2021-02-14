<template>
	<div id="app">
		<div class="wrap">
			<TheChart v-if="apiData" :apiData="apiData"/>
			<TheTable v-if="apiData" :apiData="apiData"/>
		</div>
	</div>
</template>

<script>

import TheChart from "@/components/TheChart";
import TheTable from "@/components/TheTable";

export default {
	name: 'App',
	data() {
		return {
			apiData: false,
		}
	},
	methods: {
		async getApiData() {
			let res = await fetch('https://test-task-for-frontend.herokuapp.com/data');
			this.apiData = await res.json();
		}
	},
	created() {
		this.getApiData();
	},
	components: {TheChart, TheTable}
}
</script>

<style lang="scss">
	*, :after, :before {
		margin: 0;
		padding: 0;
		border: 0;
		max-height: 99999999px;
		-webkit-font-smoothing: antialiased;
		box-sizing: border-box;
	}
	body {
		font-family: Noto Sans,Arial,sans-serif;
		font-size: 14px;
		font-weight: 400;
		line-height: 24px;
		color: #000;
	}
	.wrap {
		margin: 0 auto;
		background: #fff;
		min-height: 100%;
	}
</style>
