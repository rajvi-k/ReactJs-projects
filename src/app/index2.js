  

  import {createStore} from 'redux';
  
  


  var reducer=(state,action)=>{
      switch(action.type){
        case 'ADD':
        state=state+action.payload
        break;
        case 'SUB':
        state=state-action.payload
        break;
      }
      return state;
  }

  const store=createStore(reducer,100)


  store.subscribe(()=>{
      console.log("Updated store"+store.getState())
  })

  store.dispatch({
      type:'ADD',
      payload:200
  })