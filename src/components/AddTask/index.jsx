import React from "react";
import Button from "../Button";
import "./index.css"

const AddTask = () => {
    return (
        <div className="add-task-container">
            <input className="add-task-input" type="text" />
            <div className="add-task-button-container">
                <Button>
                    Add
                </Button>
            </div>
        </div>
    );
}

export default AddTask;