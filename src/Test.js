import {useDispatch} from 'react-redux';
import random from 'random'

export default function AddToArray(){
  const dispatch = useDispatch();
  function add(){
    dispatch({type:'add',payload:{id:random.float()}});
  }
  function modify(){
    dispatch({type:'modify',payload:{name:'prany'}});
  }
  return <><button onClick={add}>add</button>
  <button onClick={modify}>modfiy</button>
  </>
}