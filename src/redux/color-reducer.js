import initialState from './initialState'
import produce from 'immer'
// import {load} from 'redux-localstorage-simple';

// let initialState = load({namespace: "data"});

// if (!initialState || !initialState.date || !initialState.date.length) {
// 	initialState = {
// 		date: [],
// 	}
// }


export const ADD_COLOR = 'ADD-COLOR'
export const DELETE_COLOR = 'DELETE-COLOR'
export const CHANGE_COLOR = 'CHANGE-COLOR'
export const CHANGE_TITLE_COLOR = 'CHANGE-TITLE-COLOR'


const colorReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_COLOR:
      return {
        dataColor: produce(state.dataColor, item => {
          item.colors.push({
            color: state.dataColor.input,
            title: state.dataColor.value,
          })
          item.value = ''
          item.input = ''
        }),
      }
    case DELETE_COLOR:
      return {
        dataColor: produce(state.dataColor, item => {
          item.colors.splice(action.index, 1)
        }),
      }
    case CHANGE_COLOR:
      return {
        dataColor: produce(state.dataColor, item => {
          item.input = action.event
        }),
      }
    case CHANGE_TITLE_COLOR:
      return {
        dataColor: produce(state.dataColor, item => {
          item.value = action.event
        }),
      }
    default: 
      return state
  }
} 

export const addColor = () => {return {type: ADD_COLOR}}
export const deleteColor = colorIndex => {
  return {
    type: DELETE_COLOR,
    index: colorIndex,
  }
}
export const handlerChangeColor = event => {
  return {
    type: CHANGE_COLOR,
    event: event.target.value,
  }
}
export const handlerChangeTitleColor = event => {
  return {
    type: CHANGE_TITLE_COLOR,
    event: event.target.value,
  }
}

export default colorReducer;