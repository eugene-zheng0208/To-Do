import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import toDos from './modules/toDos'
import currentUser from './modules/currentUser'

const rootReducer = combineReducers({
  toDos,
  currentUser,
  form
})

export default rootReducer

/**
const rootReducer = {
  toDos: {
    [username]: {
      username: '',
      userToDos: [
        {
          task: '',
          color: '',
          deadline: '',
          complete: false,
          todoId: ''
        }
      ],
    }
  },
  currentUser: {
    username: ''
  }
}
**/
