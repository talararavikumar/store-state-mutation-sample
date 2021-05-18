import "./styles.css";
import {useSelector} from 'react-redux'

export default function App() {
  const list = useSelector(state=>state.data);
  const listview = list.map(val => <div key={val.id}>{val.id}</div>);
  return (<>{listview}</>);
}
