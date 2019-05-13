import React, { useState } from "react";
import ReactDOM from "react-dom";
import Lodash from "lodash"
import "./styles.css";

function App() {
  const [fullList , setFList] = useState([1, 2, 3, 4, 999, 999, 99]);
  const [lists , setLists] = useState(Lodash.chunk(fullList, 2));
  const [page, setPage] = useState(3);
  const getListsLen = ()=>{
    let listLen = []
    for (let index = 0; index < lists.length; index++) {
      const element = index+1;
      listLen.push(element)
    }
    return listLen
  } 
  console.log(lists, fullList);
  const createList =()=>{
      const list = lists[page];
      return list
  }
  const _list = createList()
  return (
    <div className="App">
      <h1>Hello </h1>
      {_list.map(i=><p key={i}>{i}</p>)}
      <h2>Start editing  see some magic happen!</h2>
      <div>
        <ul>
          {getListsLen().map(i=> <li onClick={()=>setPage(i-1)} key={i}>{i}</li>)}
        </ul>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
