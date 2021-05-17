import React, { useState } from "react";
import Button from "../Button";
import "./index.css"

const AddTask = ({ handleTaskAddition }) => {

    const [inputData, setInputData] = useState("");

    const handleInputChange = (text) => {
        setInputData(text.target.value);
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData("");
    }

    return (
        <div className="add-task-container">
            <input className="add-task-input" onChange={handleInputChange} value={inputData} type="text" />
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>
                    Add
                </Button>
            </div>
        </div>
    );
}

export default AddTask;