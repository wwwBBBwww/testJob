
let g = document.querySelector(".button");
let d = document.querySelector(".div>div");


function rootReducer(state, action) {
  
  switch(action.type){
    case "INCREMENT" : state ++ ; break;
    case "DECREMENT" : state -- ; break;
    case "RESET"     : state = 0; break;
    // default          : state = 0; break;
  }
  
  return state ;
}


function createStore(rootReducer, initialState) {
  
  let state = rootReducer(initialState , {type:"__INIT__"});
  const subscribers = [];

  return {
    subscribers: subscribers,
    dispatch(action) {
      state = rootReducer(state, action);
      subscribers.forEach((sub) => sub());
    },
    subscribe(callback) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    },
  };
}

const store = createStore(rootReducer, 0);

store.subscribe(()=>{ 
  d.textContent = store.getState();
  console.log(store.subscribers[0]);
});



g.addEventListener('click',()=>{
  store.dispatch({ type: "INCREMENT" });
})

store.dispatch({ type: "INIT_APPLICATION" });





window.store


  // <div class="div">
  //   <button class="button">asd</button>
  //   <div></div>
  // </div>
  