import * as types from './mutations_type'

export default {
    addTodo({ commit }, todoText) {
        commit(types.ADD_TODO, todoText);
    },
    switchTodo({ commit }, id) {
        commit(types.SWITCH_TODO, id);
    },
    selectType({ commit }, type) {
        commit(types.SELECT_TYPE, type);
    }
}