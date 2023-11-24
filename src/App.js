import {  useMemo, useContext, useEffect } from "react";
import { Context } from "../src/context/FirestoreContext"
import Card from "./components/Card";
import List from "./components/List";
import { useAuthContext } from "./context/AuthContext";
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import "./App.css";




function App() {
  const {  state, read } = useContext(Context)
  const { authenticate } = useAuthContext()
  const count = useMemo(() => {
    return `you have ${state.items.length} image${state.items.length > 1 ? 's': ''}`
  }, [state.items])

  useEffect(()=>{
    read() 
    authenticate() 
  }, [])

  return (
    <>
        <h1 className="text-center">Gallery</h1>
        {count}
        <List items={state.items}/>
    </>
  );
 
}
export default App;
