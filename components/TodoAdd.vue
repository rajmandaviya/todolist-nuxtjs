<template>
	<div class="row">
		<div class="col-sm-12">
			<b-form inline>
				<label class="sr-only" for="task-name">Name</label>
				<b-form-input
					id="task-name"
					v-model="newTodo.title"
					class="mb-2 mr-sm-2 mb-sm-0"
					placeholder="Enter your task"
					></b-form-input>
				<b-button variant="primary" @click="createTodo()">Add</b-button>
			</b-form>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'TodoAdd',
	data() {
		return {
			isLoading: false,
			newTodo: {
				title: '',
				completed: false,
				user: 1
			}
		}
	},
	methods: {
		...mapActions('todos', ['addTodo']),
		async createTodo() {
			if (this.newTodo.title.length) {
				this.isLoading = true
				let todo = { ...this.newTodo }
				this.newTodo.title = ''
				await this.addTodo(todo)
				this.isLoading = false
			}
		}
	}
}
</script>
