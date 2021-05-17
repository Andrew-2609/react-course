import React from 'react';
import "./index.css";

const Task = ({ task }) => {
    return (
        <h1 className="task-container">{task.title}</h1>
    );
}

export default Task