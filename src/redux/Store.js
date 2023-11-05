import{createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import{composeWithDevTools} from 'redux-devtools-extension';
import { CategoryReducer } from './reducers/CategoryReducer';
import { ProductDetailReducer, ProductReducer } from './reducers/ProductReducer';

const reducer = combineReducers({
    cat:CategoryReducer,
    product:ProductReducer,
    pdetail:ProductDetailReducer
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