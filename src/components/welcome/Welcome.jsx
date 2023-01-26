import React from "react";
import './welcome.css'
import { useNavigate } from "react-router-dom";

export default function Welcome() {
    const navigate = useNavigate();

    const clickShowAlert = () => {
        alert("We are working... We'll be back soon!")
    }
    
    return(
        <>
            <div className="div-welcome">
                <div className="div-welcome-text">
                <h1>Welcome to Cocktail recipes</h1>
                <div className="div-buttons-submit-welcome">
                    <div className="div-form-submit-button-welcome">
                    <button className="button-test" onClick={clickShowAlert}>
                        <span>EXPLORE</span>
                    </button>
                        {/* <button onClick={()  => navigate('/cocktails-list')} className="cssbuttons-io-button"><p>EXPLORE</p>
                        <div className="icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                        </div>
                        </button> */}
                    </div>
                    <div className="div-form-submit-button-welcome">
                        <button onClick={clickShowAlert} type="submit" className="submit-btn-welcome">
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