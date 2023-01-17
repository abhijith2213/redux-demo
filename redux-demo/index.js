const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

//Action Creator

function orderCake (){
   return {
        type: CAKE_ORDERED,
        payload:1,
    }
}

function restokeCake (qty = 1){
    return{
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

function orderIceCream(qty=1){
    return{
        type:ICECREAM_ORDERED,
        payload: qty
    }
}

function restockIceCream(qty=1){
    return{
        type:ICECREAM_RESTOCKED,
        payload:qty
    }
}

const initialCakeState = {
    numOfCakes :10,
}
const initialIceCreamState = {
    numOfIceCreams:20,
}
 
//Reducer (previousState,action)=> newState

const CakeReducer = (state = initialCakeState, action)=>{
    switch(action.type){
        case CAKE_ORDERED:{
            return{
                ...state,
                numOfCakes : state.numOfCakes - 1,
            }
        }
        case CAKE_RESTOCKED:{
            return {
                ...state,
                numOfCakes : state.numOfCakes + action.payload
            }
        }
        default:
            return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action)=>{
    switch(action.type){
        case ICECREAM_ORDERED:{
            return{
                ...state,
                numOfIceCreams: state.numOfIceCreams- 1,
            }
        }
        case ICECREAM_RESTOCKED:{
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams+ action.payload
            }
        }
        case CAKE_ORDERED:{
            return{
                ...state,
                numOfIceCreams : state.numOfIceCreams - 1,
            }
        }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    cake:CakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer)
console.log('initial State', store.getState());

const unsubscribe = store.subscribe(()=> {console.log('updated',store.getState());})
const action = bindActionCreators({orderCake,restokeCake,orderIceCream,restockIceCream}, store.dispatch)
action.orderCake()
action.orderCake()
action.orderCake()
action.restokeCake(3)

action.orderIceCream()
action.orderIceCream()
action.restockIceCream(2)
unsubscribe()
