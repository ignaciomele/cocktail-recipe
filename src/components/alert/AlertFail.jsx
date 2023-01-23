import React from "react";
import './alert.css'

export default function Alert() {

    return(
        <>
            <div className="div-alert">
                    <div className="demo-preview ">
                        <div className="alert alert-danger alert-dismissable">
                            <strong>Oh snap!</strong> Change a few things up and try submitting again.
                        </div>
                    </div>
            </div>
        </>
    )
}