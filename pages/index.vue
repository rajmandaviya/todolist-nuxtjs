<template>
    <div class="container">
		<div class="row mb-3">
			<div class="col-sm-12">
				<h1 id="title">TODO LIST</h1>
			</div>
		</div>
		<todo-add />
		<todo-list />
    </div>
</template>

<script>
import TodoAdd from '@/components/TodoAdd'
import TodoList from '@/components/TodoList'
export default {
		components: {
		TodoAdd,
		TodoList
	}
}
</script>

<style>
.container {
	margin: 0 auto;
	min-height: 100vh;
	justify-content: center;
	align-items: center;
	text-align: center;
  padding-top: 100px;
}
</style>
