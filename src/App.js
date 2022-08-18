import './App.css';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { db } from "./firebase_config";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import TodoListItem from './Todo';
import { Button } from '@mui/material';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          in_progress: doc.data().in_progress
        }))
      );
    });
  }

  const addTodo = (e) => {
    e.preventDefault();
    
    db.collection("todos").add({
      in_progress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: input,
    });

    setInput("")
  }
  
  return (
    <div className="App" >
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: "column", 
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
      
      <h1>Chu Do List</h1>
      <form>
        <TextField sx={{ input: { color: 'black' } }}
          id="standard-basic" 
          label="Add a Task" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          variant="outlined"
          style={{maxWidth: "500px", width: "90vw"}}
        />
        <Button
            type="submit"
            variant="contained"
            onClick={addTodo}
            style={{ display: "none" }}
          >
            Default
        </Button>
      </form>

      <div style={{ width: "90vw", maxWidth: "500px", marginTop: "24px" }}>
        {todos.map((todo) => (
          <TodoListItem
          todo={todo.todo} in_progress={todo.in_progress} id={todo.id} />
        ))}
      </div>

      </div>
    </div>
  );
}

export default App;
