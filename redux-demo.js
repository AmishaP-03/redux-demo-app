// Import statement in Node.js
const redux = require("redux");

// Reducer function executed by redux
// default value of state is set here; fallback to it when redux triggers the initial action. This initial action will not trigger the subscription though.
const counterReducer = (state = {counter: 0}, action) => {
    return {
        counter: state.counter + 1
    };
}

const store = redux.createStore(counterReducer); // initial action triggered by redux

// Subscriber function executed by redux
const counterSubscriber = () => {
    // Return the latest snapshot of store state after update
    const latestData = store.getState();
    console.log(latestData);
}

store.subscribe(counterSubscriber); // Whenever there is an update in the store, redux triggers this subscription for us

store.dispatch({type: "INCREMENT"}); // specify the type of action

// OUTPUT: {counter: 2}
// 1st increment due to initial trigger by redux at the time of store creation
// 2nd increment due to dispatching an increment action