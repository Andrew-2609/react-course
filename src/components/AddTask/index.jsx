import React, { useState } from "react";
import Button from "../Button";
import "./index.css"

const AddTask = () => {
    
    const [inputData, setInputData] = useState("");

    const handleInputChange = (text) => {
        setInputData(text.target.value);
    }

    return (
        <div className="add-task-container">
            <input className="add-task-input" onChange={handleInputChange} value={inputData} type="text" />
            <div className="add-task-button-container">
                <Button>
                    Add
                </Button>
            </div>
        </div>
    );
}

export default AddTask;