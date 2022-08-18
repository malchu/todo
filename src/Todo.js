import React from "react";
import './Todo.css';
import { ListItem, ListItemText, Button } from "@mui/material";
import { db } from "./firebase_config";
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";
import { GoTrashcan } from "react-icons/go";

export default function TodoListItem({ todo, in_progress, id }) {
  
    function toggleInProgress() {
        db.collection("todos").doc(id).update({in_progress: !in_progress,});
    }

    function deleteTodo() {
        db.collection("todos").doc(id).delete();
    }

    return (
        <div style={{ display: "flex" }}>
        <Button onClick={toggleInProgress}> {in_progress ? <BsCheckCircle /> : <BsCheckCircleFill />} </Button>
        <ListItem className="item">
            <ListItemText primary={todo} secondary={in_progress ? "In Progress" : "Completed"} />
        </ListItem>

        <Button onClick={deleteTodo}><GoTrashcan /></Button>
        
        </div>
    );
}