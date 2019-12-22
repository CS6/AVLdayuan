import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import reducer from './EXPreducer'
import GCreducer from './GCreducer'


export default combineReducers({
  todos,
  visibilityFilter,
  reducer,
  GCreducer
})

// export const initialState = {
//         count: 42
// };

// export function reducer(state = initialState, action) {
//         return state;
// }