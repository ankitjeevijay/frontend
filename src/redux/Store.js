import{createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import{composeWithDevTools} from 'redux-devtools-extension';
import { CategoryReducer } from './reducers/CategoryReducer';

const reducer = combineReducers({
    cat:CategoryReducer
})
let intialState ={

}
// create store
const store = createStore(
    reducer,
    intialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
  export default store;