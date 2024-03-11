// state(ja niye kaj korte cacchi tai state)
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER  = "ADD_USER";
const 


const initialCounterState = {
    count: 0,
}

const initialUserState = {
    user: [{name:"rafi"}]
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
                ...state,
                count:state.count + 1
            }
           
        case DECREMENT:
            return {
                ...state,
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
// store


