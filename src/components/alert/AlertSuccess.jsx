import React from "react";
import './alert.css'

export default function Alert() {

    return(
        <>
            <div className="div-alert">
                    <div className="demo-preview ">
                        <div className="alert alert-success alert-dismissable ">
                            <strong>Well done!</strong> Your recipe has been added successfully.
                        </div>
                    </div>
            </div>
        </>
    )
}