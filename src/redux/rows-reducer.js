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
          item[action.index].fullName = action.event
        }),
      }
    case CHANGE_NAME_PROJECT:
      return {
        dataRowsBody: produce(state.dataRowsBody, item => {
          console.log(item)
          item[action.index].nameProject = action.event
        }),
      }
    case SELECTED_STATUS:
      return {
        dataRowsBody: produce(state.dataRowsBody, item => {
          item[action.index].selectedValue = action.event
        }),
      }
    case CHANGE_WEEK:
      let data = Object.freeze(state.dataRowsBody)
      return {
        dataRowsBody: produce(data, item => {
            item[action.index].months[action.month][action.monthsIndex].number = action.event
        })
      }
      
    case CHANGE_BACKGROUNG_WEEK:
      return {
        dataRowsBody: produce(state.dataRowsBody, item => {
          item[action.index].months[action.month][action.monthsIndex].background = action.color
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
export const handlerChangefullName = (indexRow, event) => {
  return {
    type: CHANGE_FULL_NAME,
    index: indexRow,
    event: event.target.value,
  }
}
export const handlerChangeNameProject = (indexRow, event) => {
  return {
    type: CHANGE_NAME_PROJECT,
    index: indexRow,
    event: event.target.value,
  }
}
export const handlerSelectedStatus = (indexRow, event) => {
  return {
    type: SELECTED_STATUS,
    index: indexRow,
    event: event.target.value,
  }
}
export const handlerChangeMonths = (monthsIndex, event, month, indexRow) => {
  return {
    type: CHANGE_WEEK,
    monthsIndex,
    event: event.target.value,
    month,
    index: indexRow,
  }
}
export const handleChangeComplete = (monthsIndex, color, month, indexRow) => {
  return {
    type: CHANGE_BACKGROUNG_WEEK,
    monthsIndex,
    color: color.hex,
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