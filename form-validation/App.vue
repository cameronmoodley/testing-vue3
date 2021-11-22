<template>
	<div>
		App <br />
		<my-button background="darkslateblue" color="white" :disabled="!valid" />
	</div>
</template>
<script>
	import MyButton from './MyButton.vue';
	export default {
		components: {
			MyButton,
		},
		data() {
			return {
				valid: true,
			};
		},
	};
</script>
<style scoped></style>
