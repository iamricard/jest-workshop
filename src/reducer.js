import uuid from 'uuid'

export const addTodo = (text) => {
  return { id: uuid()
         , type: 'ADD_TODO'
         , text
         }
}

export const setVisibilityFilter = (filter) => {
  return { type: 'SET_VISIBILITY_FILTER'
         , filter
         }
}

export const toggleTodo = (id) => {
  return { type: 'TOGGLE_TODO'
         , id
         }
}

const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { id: action.id
             , text: action.text
             , completed: false
             }

    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign( {}
                          , state
                          , { completed: !state.completed }
                          )

    default:
      return state
  }
}

export default function reducer (state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [ ...state
             , todo(undefined, action)
             ]
    case 'TOGGLE_TODO':
      return state.map((t) => todo(t, action))
    default:
      return state
  }
}
