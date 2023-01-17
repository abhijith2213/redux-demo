const redux = require('redux');
const produce = require('immer').produce
const createStore = redux.createStore;
const initialCakeState ={
    name:'Vishal',
    address:{
        street:'123 Main st',
        city: 'Boston',
        state: 'MA'
    },
}

const STREET_UPDATED = 'STREET_UPDATED'

function updateStreet(street){
    return{
        type:STREET_UPDATED,
        payload:street
    }
}

const reducer =(state= initialCakeState, action)=>{
    switch(action.type){
        case STREET_UPDATED :
        //     return{
        //         ...state,
        //         address:{
        //             ...state.address,
        //             street: action.payload
        //         }
        // }
        return produce(state,(draft) =>{
            draft.address.street = action.payload
        })
        default:{
            return state
        }
    }
}

const store = redux.createStore(reducer)

console.log('initial State', store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log('update state', store.getState());
})

store.dispatch(updateStreet('321 Main Street'))

unsubscribe()



