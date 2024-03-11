// state(ja niye kaj korte cacchi tai state)

const {createStore} = require("redux") 

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";



const initialCounterState = {
    count: 0,
}

// dispatch - action is an object(amra jei kaj ta korte cacchi tai action ), it has two important things: type, payload(transfer data)

// INCREMENT COUNTER
const incrementCounterAction = () => {
    return {
        type:INCREMENT
    }
}

// DECREMENT COUNTER
const decrementCounterAction = () => {
    return {
        type:DECREMENT
    }
}

// create reducer(pure function - what it takes input and similar to give output ) for counter;

const counterReducer = (state=initialCounterState,action,payload) => {
    
    switch (action.type) {
        case INCREMENT:
            return {
               
                count:state.count + 1
            }
           
        case DECREMENT:
            return {
             
                count:state.count - 1
            };
           
        default:
            break;
    }

}

// payload

// state 
// dispatch action
// reducer - word based on action
// store(hold all state - getState(we can see position of the state  ), dispatch(), subscribe(subscribe with view))

// how to make store in redux;

const store = createStore(counterReducer);
store.subscribe(() => {
    console.log(store.getState())
})

// dispatch action 

store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(decrementCounterAction())
