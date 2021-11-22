<template>
	<div>App</div>
</template>
<script>
	export default {};
</script>
<style scoped>
	.input {
		display: flex;
		flex-direction: column;
	}
	.label {
		display: flex;
		justify-content: space-between;
	}
	.error {
		color: red;
	}
	.input {
		width: 100%;
	}
	input {
		box-sizing: border-box;
		padding: 10px;
		border-radius: 8px;
		border: 1px solid silver;
		margin: 2px;
		font-size: 16px;
		width: 100%;
		cursor: pointer;
	}
</style>
