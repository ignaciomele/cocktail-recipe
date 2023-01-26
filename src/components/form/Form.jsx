import React, { useState } from "react";
import './form.css'
import client from "../../lib/client";
import { useNavigate } from "react-router-dom";
import AlertSuccess from "../alert/AlertSuccess";
import AlertFail from "../alert/AlertFail";

export default function Form() {
    const [dataCocktail, setDataCocktail] = useState({
        name: { placeholder: 'Cocktail name', type: 'text', value: '' },
        glass: { placeholder: 'Type of glass', type: 'text', value: '' },
        ingredients: { placeholder: 'Ingredients', type: 'text', value: '' },
        recipe: { placeholder: 'Recipe', type: 'text', value: '' },
        comments: { placeholder: 'Comments', type: 'text', value: '' }
    })
    const [addCocktailButton, setAddCocktailButton] = useState('ADD')
    const [viewAllButton, setViewAllButton] = useState('EXPLORE')
    const [showAlertSuccess, setShowAlertSuccess] = useState(false)
    const [showAlertFail, setShowAlertFail] = useState(false)

    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target
        setDataCocktail(prevState => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                value
            }
        }))
    }

    const addDataCocktail = async e => {
        e.preventDefault()
        try {
            await client.createCocktail(Object.keys(dataCocktail).reduce((acc, keyName) => {
                acc[keyName] = dataCocktail[keyName].value
                setTimeout(() => {
                    setShowAlertSuccess(true)
                }, 500)
                setTimeout(() => {
                    setShowAlertSuccess(false)
                }, 4000)
                return acc
                
            }, {}))
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        {
                showAlertSuccess === true ? <AlertSuccess/> : ''
            }
            {
                showAlertFail === true ? <AlertFail/> : ''
            }
            <div className="card mb-3">
                <form onSubmit={e => {addDataCocktail(e)}} className="form">
                    <div className="card-header">
                    <h3>Please, add your favourite cocktail</h3>
                    </div>
                    <div className="input mb-3">
                        {Object.keys(dataCocktail).map(keyName => {
                            if (keyName === 'name') return <input
                            className="form-control" 
                            id="exampleFormControlInput1"
                            key={keyName}
                            type={dataCocktail[keyName].type}
                            placeholder={dataCocktail[keyName].placeholder}
                            name={keyName}
                            value={dataCocktail[keyName].value}
                            onChange={e => handleChange(e)}
                            required
                            />
                            if (keyName === "comments") return <textarea
                            className="form-control" 
                            id="exampleFormControlTextarea1"
                            key={keyName}
                            type={dataCocktail[keyName].type}
                            placeholder={dataCocktail[keyName].placeholder}
                            name={keyName}
                            value={dataCocktail[keyName].value}
                            onChange={e => handleChange(e)}
                            />
                            return <textarea
                            className="form-control" 
                            id="exampleFormControlTextarea1"
                            key={keyName}
                            type={dataCocktail[keyName].type}
                            placeholder={dataCocktail[keyName].placeholder}
                            name={keyName}
                            value={dataCocktail[keyName].value}
                            onChange={e => handleChange(e)}
                            required
                            />
                            
                        })}
                        </div>

                        <div className="div-buttons-submit">
                            <button className="button-test" onClick={()  => navigate('/cocktails-list')}>
                                <span>{viewAllButton}</span>
                            </button>                            
                            <button type="submit" className="submit-btn-form">
                                <span className="icon">
                                    <p>+</p>
                                </span>
                                <span className="text"><p>{addCocktailButton}</p></span>
                            </button>
                        </div>
                </form>
            </div>
            

        </>
    )
}