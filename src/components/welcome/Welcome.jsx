import React from "react";
import './welcome.css'
import { useNavigate } from "react-router-dom";

export default function Welcome() {
    const navigate = useNavigate();
    
    return(
        <>
            <div className="div-welcome">
                <div className="div-welcome-text">
                <h1>Welcome to Cocktail recipes</h1>
                <div className="div-buttons-submit-welcome">
                    <div className="div-form-submit-button-welcome">
                    <button className="button-explore" onClick={()  => navigate('/cocktails-list')}>
                        <span>EXPLORE</span>
                    </button>
                    </div>
                    <div className="div-form-submit-button-welcome">
                        <button onClick={()  => navigate('/add-cocktail')} type="submit" className="submit-btn-welcome">
                            <span className="icon">
                            <p>+</p>
                            </span>
                            <span className="text"><p>ADD</p></span>
                        </button>
                    </div>
                </div>
                </div>
                
            </div>
        </>
    )
}