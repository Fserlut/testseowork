<template>
	<div class="table-container">
		<div class="table-container__scroll">
			<table>
				<thead>
					<tr>
						<td>Type stats</td>
						<td
							v-for="item in tableData[0].data"
						>
							{{ new Date(item.date).toLocaleDateString() }}
						</td>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="el in tableData"
					>
						<td >
							{{ el.name }}
						</td>
						<td
							v-for="item in el.data"
						>
							{{ item.value }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	props: ['apiData'],
	data() {
		return {
			tableData: this.getData
		}
	},
	computed: {
		getData() {
			return (this.apiData.items);
		}
	},
	created() {
		this.tableData = this.getData;
		console.log(this.tableData);
	}
}
</script>

<style lang="scss" scoped>
	.table-container {
		width: 100%;
		padding: 25px;
		overflow: hidden;
	}
	.table-container__scroll {
		overflow: scroll;
	}
	table {
		width: 100%;
		text-align: left;
		border-collapse: collapse;
		font-size: 12px;
		line-height: 14px;
		border: 0;
		color: #2d3646;
	}
	td {
		border: 1px solid #e0e6f0;
		padding: 10px;
		white-space: nowrap;
	}
</style>