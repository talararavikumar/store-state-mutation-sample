export default function reducer(state = {data:[{id:1}]}, action){
  switch(action.type){
    case 'add':
      console.log(action.payload);
    const  newarr = {...state, data:[...state.data, action.payload]};
    console.log(newarr);
     return newarr;
     default:
    return state;
  }   
}