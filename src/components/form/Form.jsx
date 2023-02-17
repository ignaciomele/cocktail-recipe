import React, { useState } from "react";
import './form.css'
import client from "../../lib/client";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function Form() {
    const [dataCocktail, setDataCocktail] = useState({
        name: { placeholder: 'Cocktail name', type: 'text', value: '' },
        glass: { placeholder: 'Type of glass', type: 'text', value: '' },
        ingredients: { placeholder: 'Ingredients', type: 'text', value: '' },
        recipe: { placeholder: 'Recipe', type: 'text', value: '' },
        comments: { placeholder: 'Comments', type: 'text', value: '' },
        photo: { placeholder: 'Image', type: 'file', value: '' }
    })
    const [addCocktailButton, setAddCocktailButton] = useState('ADD')
    const [viewAllButton, setViewAllButton] = useState('EXPLORE')

    const navigate = useNavigate();

    const postFile = file => {

    }
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
        setAddCocktailButton('ADDING')
        try {
            await client.createCocktail(Object.keys(dataCocktail).reduce((acc, keyName) => {
                acc[keyName] = dataCocktail[keyName].value
                return acc
            }, {}))
            setTimeout(() => {
                setAddCocktailButton('ADD')
            }, 3000);
            setAddCocktailButton('ADDED')
            swal({
                title: "The cocktail was added successfully",
                icon: "success",
                button: "accept",
                timer: "2000"
            });
            dataCocktail.name.value = ''
            dataCocktail.glass.value = ''
            dataCocktail.ingredients.value = ''
            dataCocktail.recipe.value = ''
            dataCocktail.comments.value = ''
            dataCocktail.photo.value = ''
        } catch (error) {
            setTimeout(() => {
                setAddCocktailButton('ADD')
            }, 3000);
            swal({
                title: "The cocktail couldn't be added",
                icon: "error",
                button: "accept",
                timer: "2000"
            });
            console.log(error)
        }
    }

    return(
        <>
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
                            if (keyName === 'photo') return <input
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
                            <button className="button-explore" onClick={()  => navigate('/cocktails-list')}>
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