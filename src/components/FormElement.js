import React, { useState, useEffect, useId } from "react";

const FormElement = (props) => {
    const id = useId();
    return (
        <div>
            <label for={id}>{props.name}</label>
            <input type="text" id={id} placeholder={"Enter " + props.name} disabled={props.disabled} />
        </div>
    )
}

export default FormElement;
