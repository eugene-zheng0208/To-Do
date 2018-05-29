const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER'

export const updateCurrentUser = username => dispatch =>
  dispatch({
    type: UPDATE_CURRENT_USER,
    username
  })

const initialState = {
  username: ''
}

const currentUser = (state = initialState, action) => {
  const { type, username } = action

  switch (type) {
    case UPDATE_CURRENT_USER:
      return {
        ...state,
        username
      }
    default:
      return state
  }
}

export default currentUser
