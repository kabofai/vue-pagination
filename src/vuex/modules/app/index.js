import actions from './actions'
import mutations from './mutations'

export default {
    state: {
        todoList: [],
        todoInfo: {
            id: 0,
            text: '',
            isDone: false
        },
        selected: 0
    },
    actions: actions,
    mutations: mutations,
    getters: {
        filterDoned(state) {
            let todoList = state.todoList.filter((item) => {
                if (item.isDone) {
                    return item;
                }
            });
            return todoList;
        },
        filterNoDoned(state) {
            let todoList = state.todoList.filter((item) => {
                if (!item.isDone) {
                    return item;
                }
            });
            return todoList;
        }
    }
}