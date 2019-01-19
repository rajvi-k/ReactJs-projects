import React from 'react';
import {render} from 'react-dom';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';

var userObj={
    name:"Saloni",
    salary:4
}
var reducer=(state=userObj,action)=>{
    switch(action.type){
        case 'Set_Name':
        state={
            ...state,
            name:action.payload
        }
        console.log(state)
        break;
    }
    return state;
}

const store = createStore(combineReducers({user:reducer}))

store.subscribe(()=>{
    console.log("New value ",store.getState())
})

render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById("app")    
)