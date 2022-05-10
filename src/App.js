import './App.css';
import React, { useState } from "react";
import Form from './Companents/Form';
import Todo from './Companents/Todo';
import Remove from './Companents/Remove';


function App() {
  const [list, setList] = useState([]);
  const [newTitle, setNewTitle] = useState("")

  return (
    <div className="App">
      <div className='paper'>
        <div className='content'>
          <Form
            list={list}
            setList={setList}
            newTitle={newTitle}
            setNewTitle={setNewTitle}
          />

          <div className='pattern'>

            <Todo
              list={list}
              setList={setList}

            />
          </div>
        </div>

        <Remove
          list={list}
          setList={setList}
        />
      </div>
    </div>
  );
}

export default App;
