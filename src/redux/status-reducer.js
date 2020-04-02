import initialState from './initialState'
import produce from 'immer'

export const ADD_STATUS = 'ADD-STATUS'
export const DELETE_STATUS = 'DELETER-STATUS'
export const CHANGE_STATUS = 'CHANGE-STATUS'

const statusReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_STATUS:
      return {
        dataStatus: produce(state.dataStatus, item => {
          item.statuses.push({
            text: state.dataStatus.value,
          })
          item.value = ''
        }),
      }
    case DELETE_STATUS:
      return {
        dataStatus: produce(state.dataStatus, item => {
          item.statuses.splice(action.index, 1)
        }),
      }
    case CHANGE_STATUS:
      return {
        dataStatus: produce(state.dataStatus, item => {
          item.value = action.value
        }),
      }
    default: 
      return state
  }
}
export const addStatus = () => {return {type: ADD_STATUS}}
export const deleteStatus = statusIndex => {
  return {
    type: DELETE_STATUS,
    index: statusIndex,
  }
}
export const handlerChangeStatus = value => {
  return {
    type: CHANGE_STATUS,
    value: value,
  }
}

export default statusReducer;