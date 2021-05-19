export default function reducer(state = { data: [{ id: 1 }], name: 'ravikumar' }, action) {
  switch (action.type) {
    case 'add':
      //console.log(action.payload);
      state.data.push(action.payload);
      const newState = { ...state, data: [...state.data, action.payload] };
      //console.log(newState);
      return newState;
    case 'modify':
      //console.log(action.payload);
      state.name = action.payload.name
      const newState2 = { ...state, name: action.payload.name };
      //console.log(newState2);
      return newState2;
    default:
      return state;
  }
}