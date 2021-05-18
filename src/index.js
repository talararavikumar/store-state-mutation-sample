import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import reducer from './reducer'
import {Provider} from 'react-redux'
import App from "./App";
import AddToArray from "./Test";
const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
   <Provider store = {store}>
    <App />
    <AddToArray/>
    </Provider>
  </StrictMode>,
  rootElement
);
