import Button from '@atlaskit/button';
import Textfield from '@atlaskit/textfield';
import { useState } from 'react';
import { v4 } from 'uuid';
import './App.css';
import TodoList from './components/TodoList/TodoList';
function App() {

  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");
  const handleChange = (e) =>{
    setTextInput(e.target.value);
  };

  const handleAddBtnClick= () =>{
    setTodoList([...todoList,{id:v4(),name:textInput}]);
  };


  return (
    <div className="App">
      <Textfield
      name='todo' placeholder='Thêm việc'
      elemAfterInput={
        <Button appearance='primary' isDisabled={!textInput} onClick={handleAddBtnClick}>Thêm</Button>
      }
      css={{padding:'2px 4px 2px'}} value={textInput} onChange={handleChange}
      ></Textfield>
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
