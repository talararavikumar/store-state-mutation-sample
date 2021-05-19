import "./styles.css";
import {useSelector} from 'react-redux'
import { useEffect } from "react";

export default function App() {
  const nameObj = useSelector(state=>state.name);
  useEffect(()=>{console.log( nameObj)});
  const {data:list }= useSelector(state=>state);
  useEffect(()=>{console.log(`list is ${list[0].id}`)});
  
  const listview = list.map(val => <div key={val.id}>{val.id}</div>);
  return (<>{listview}<div>{nameObj}</div></>);
}
