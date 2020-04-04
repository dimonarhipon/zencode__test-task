import  initialState, { getMonths } from './initialState'
import produce from 'immer'
// import {load} from 'redux-localstorage-simple';

// let initialState = load({namespace: "data"});

// if (!initialState || !initialState.date || !initialState.date.length) {
// 	initialState = {
// 		date: [],
// 	}
// }

export const ADD_DEVELOPER = 'ADD-DEVELOPER'
export const DELETE_DEVELOPER = 'DELETE-DEVELOPER'
export const ADD_PROJECT = 'ADD-PROJECT'
export const DELETE_PROJECT = 'DELETE-PROJECT'

export const CHANGE_FULL_NAME = 'CHANGE-FULL-NAME'
export const CHANGE_NAME_PROJECT = 'CHANGE-NAME-PROJECT'
export const SELECTED_STATUS = 'SELECTED-STATUS'

export const CHANGE_WEEK = 'CHANGE-WEEK'
export const CHANGE_BACKGROUNG_WEEK = 'CHANGE-BACKGROUND-WEEK'
export const SHOW_BACKGROUND_WEEK = 'SHOW-BACKGROUND-WEEK'

const rowsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DEVELOPER:
      return {
        dataRowsBody: produce(state.dataRowsBody, item => {
          item.push({
            fullName: 'Имя',
            nameProject: 'Проект',
            selectedValue: 'Идёт',
            months: getMonths(),
          })
        }),
      }
    case DELETE_DEVELOPER:
      return {
        dataRowsBody: produce(state.dataRowsBody, item => {
          item.pop()
        }),
      }
    case ADD_PROJECT:
      return {
        dataRowsBody: produce(state.dataRowsBody, item => {
          item.splice(action.index + 1, 0, {
            fullName: '',
            nameProject: '',
            selectedValue: '',
            months: getMonths(),
          })
        }),
      }
    case DELETE_PROJECT:
      return {
        dataRowsBody: produce(state.dataRowsBody, item => {
          item.splice(action.index, 1)
        }),
      }
    case CHANGE_FULL_NAME:
      return {
        dataRowsBody: produce(state.dataRowsBody, item => {
          item[action.index].fullName = action.value
        }),
      }
    case CHANGE_NAME_PROJECT:
      return {
        dataRowsBody: produce(state.dataRowsBody, item => {
          item[action.index].nameProject = action.value
        }),
      }
    case SELECTED_STATUS:
      return {
        dataRowsBody: produce(state.dataRowsBody, item => {
          item[action.index].selectedValue = action.value.target.value
        }),
      }
    case CHANGE_WEEK:
      if (action.value > 90 || action.value < 0) return state
      return {
        dataRowsBody: produce(state.dataRowsBody, item => {
            item[action.index].months[action.month][action.monthsIndex].number = action.value
        })
      }
    case CHANGE_BACKGROUNG_WEEK:
      return {
        dataRowsBody: produce(state.dataRowsBody, item => {
          item[action.index].months[action.month][action.monthsIndex].background = action.value
        })
      }
    // case SHOW_BACKGROUND_WEEK:
    //   return {
    //     dataRowsBody: produce(state.dataRowsBody, item => {
    //       let show = item[action.index].months[action.month][action.monthsIndex].show
    //       item.show = !show
    //     })
    //   }
    default:
      return state
  }
}
export const addDeveloper = () => {return {type: ADD_DEVELOPER}}
export const deleteDeveloper = () => {return {type: DELETE_DEVELOPER}}
export const addProject = indexRow => {
  return {
    type: ADD_PROJECT,
    index: indexRow,
  }
}
export const deleteProject = indexRow => {
  return {
    type: DELETE_PROJECT,
    index: indexRow,
  }
}
export const handlerChangefullName = (indexRow, value) => {
  return {
    type: CHANGE_FULL_NAME,
    index: indexRow,
    value: value
  }
}
export const handlerChangeNameProject = (indexRow, value) => {
  return {
    type: CHANGE_NAME_PROJECT,
    index: indexRow,
    value: value,
  }
}
export const handlerSelectedStatus = (indexRow, value) => {
  return {
    type: SELECTED_STATUS,
    index: indexRow,
    value: value
  }
}
export const handlerChangeMonths = (monthsIndex, value, month, indexRow) => {
  return {
    type: CHANGE_WEEK,
    monthsIndex,
    value: value,
    month,
    index: indexRow,
  }
}
export const handleChangeComplete = (monthsIndex, value, month, indexRow) => {
  return {
    type: CHANGE_BACKGROUNG_WEEK,
    monthsIndex,
    value: value.hex,
    month,
    index: indexRow,
  }
}
// export const onShow = (monthsIndex, month, indexRow) => {
//   return {
//     type: SHOW_BACKGROUND_WEEK,
//     monthsIndex,
//     month,
//     index: indexRow,
//   }
// }
export default rowsReducer