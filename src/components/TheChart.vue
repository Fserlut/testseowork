<template>
	<div class="chart-container">
		<Highcharts :options="getOptions" ref="highcharts"/>
	</div>
</template>

<script>

export default {
	props: ['apiData'],
	computed: {
		getOptions() {
			let tmpData = this.apiData.items;
			let newData = tmpData.map(el => {
				return ({'name': el.name, 'data': el.data});
			});
			let parsedData = newData.map(el => {
				return ({
					name: el.name,
					data: el.data.map(item => {
						return ([
							Date.UTC(new Date(item.date).getFullYear(), new Date(item.date).getMonth(), new Date(item.date).getDay()),
							item.value
						]);
					})
				});
			});
			return ({
				title: {
					text: ''
				},
				yAxis: {
					title: {
						text: ''
					}
				},

				xAxis: {
					ordinal: false,
					type: 'datetime',
					dateTimeLabelFormats: {
						day: '%e. %b',
						month: '%b \'%y',
						year: '%Y'
					}
				},
				navigator: {
					enabled: true,
				},
				rangeSelector: {
					enabled: true,
					buttons: [{
						type: 'month',
						count: 1,
						text: '1m',
						title: 'View 1 month'
					}, {
						type: 'month',
						count: 3,
						text: '3m',
						title: 'View 3 months'
					}, {
						type: 'month',
						count: 6,
						text: '6m',
						title: 'View 6 months'
					}, {
						type: 'year',
						count: 1,
						text: '1y',
						title: 'View 1 year'
					}, {
						type: 'all',
						text: 'All',
						title: 'View all'
					}],
					verticalAlign: 'bottom',
					buttonPosition: {
						align: 'left'
					},
					inputEnabled: false,
					allButtonsEnabled: true
				},
				chart: {
					type: 'spline'
				},
				tooltip: {
					shared: true,
					crosshairs: true
				},
				series: parsedData,
				legend: {
					layout: 'horizontal',
					align: 'left',
					verticalAlign: 'top'
				},
			});
		}
	}
}
</script>

<style scoped>

</style>