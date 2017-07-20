import * as types from './mutations_type'

export default {
    [types.ADD_TODO](state, todoText) {
        if (todoText) {
            let todoInfo = {};
            todoInfo.isDone = false;
            if (state.todoList.length == 0) {
                todoInfo.id = 0;
            } else if (state.todoList.length > 0) {
                let todoFirst = state.todoList[state.todoList.length - 1];
                todoInfo.id = todoFirst.id + 1;
            }
            todoInfo.text = todoText;
            state.todoList.push(todoInfo);
        }
    },
    [types.SWITCH_TODO](state, id) {
        state.todoList.map((item) => {
            if (item.id == id) {
                item.isDone = !item.isDone;
            }
        });
    },
    [types.SELECT_TYPE](state, type) {
        state.selected = type;
    }
}