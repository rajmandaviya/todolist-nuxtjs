<template>
    <div class="row">
      <div class="col-sm-12">
        <b-list-group>
          <b-list-group-item v-for="(item, index) in todos" :key="index" :class="(item.completed ? 'completed' : '')">
            <span class="task">{{ item.title }}</span>
            <span class="btn btn-danger btn-sm action" title="Delete" @click="remove(index)">
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </span>
            <span v-if="!item.completed" class="action btn btn-success btn-sm mr-2" title="Mark as complete" @click="markComplete(index)">
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2-all" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M12.354 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                <path d="M6.25 8.043l-.896-.897a.5.5 0 1 0-.708.708l.897.896.707-.707zm1 2.414l.896.897a.5.5 0 0 0 .708 0l7-7a.5.5 0 0 0-.708-.708L8.5 10.293l-.543-.543-.707.707z"/>
              </svg>
            </span>
            <span v-else class="action btn btn-success btn-sm mr-2" title="Mark as In-complete" @click="markComplete(index)">
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-journal-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                <path fill-rule="evenodd" d="M6.146 6.146a.5.5 0 0 1 .708 0L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 0 1 0-.708z"/>
              </svg>
            </span>
            <span v-if="!item.completed" class="action btn btn-info btn-sm mr-2" title="Edit" @click="editTodo(index)">
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
              </svg>
            </span>
          </b-list-group-item>
        </b-list-group>
      </div>
      <b-modal ref="update-modal" hide-header @ok="handleSubmit">
        <form ref="form">
          <b-form-group
            label="Task"
            label-for="title"
            invalid-feedback="Task is required"
          >
            <b-form-input
              v-model="title"
              required
            ></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'TodoList',
	computed: {
		...mapGetters('todos', ['todos'])
	},
  data () {
    return {
		  title: '',
      index: ''
  	}
  },
	methods: {
		...mapActions('todos', ['updateTodo', 'removeTodo', 'changeStatus']),
		async markComplete(index) {
			await this.changeStatus(index)
		},
		async remove(index) {
      this.$bvModal.msgBoxConfirm('Are you sure?').then(value => {
        if(value) {
          this.removeTodo(this.todos[index])
        }
      })
		},
    editTodo(index) {
      this.title = this.todos[index].title
      this.index = index
      this.$refs['update-modal'].show()
    },
    async handleSubmit() {
      let data = {
        index: this.index,
        title: this.title
      }
      this.index = ''
      this.title = ''
      await this.updateTodo(data)
    }
	}
}
</script>

<style scoped>
.btn {
  	min-width: 40px;
}
.list-group {
  	margin-top: 15px;
}
.completed .task {
  text-decoration: line-through;
}
.list-group-item {
  	text-align: left;
}
.list-group-item .action {
  	float: right;
}
</style>
