// state(ja niye kaj korte cacchi tai state)
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const ADD_USER  = "ADD_USER"
const initialCounterState = {
    count: 0,
}

const initialUserState = {
    user: [{name:"rafi"}]
}

// action is an object(amra jei kaj ta korte cacchi tai action ), it has two important things: type, payload(transfer data)

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

// add user

const addUser = () => {
    return {
        type:ADD_USER,
        payload: {name:"mahdi"}
    }
}


// payload
