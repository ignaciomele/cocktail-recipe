import React, {useState, useEffect} from "react";
import './cocktailsList.css'
import 'bootstrap/js/dist/collapse';
import client from "../../lib/client";
import { useNavigate } from "react-router-dom";

export default function CocktailsList() {
    const [listCocktails, setListCocktails] = useState([])
    const [searchCocktails, setSearchCocktails] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        const getCocktailsList = async () => {
            const res = await client.getCocktails()
            if (res.data.cocktails && res.data.cocktails.length) setListCocktails(() => res.data.cocktails.map(cocktail => ({...cocktail})))
        }
    
        getCocktailsList()
    }, [])



    const keysDataCocktails = ["name", "glass", "ingredients", "recipe"]
    const searchDataCocktails = listCocktails => {
        return listCocktails.filter(cocktail => 
            keysDataCocktails.some(key => cocktail[key].toLowerCase().includes(searchCocktails))
        )
    } 
    
    
    return (
        <>
            <div className="div-cocktails">
                <div className="div-cocktails-content">
                <div className="div-cocktails-header">
                    <div className="div-form-submit-button-welcome">
                    <button className="button-test-list" onClick={()  => navigate('/')}>
                        <span>HOME</span>
                    </button>
                    </div>
                    <div className="title-cocktails">
                        <h1>Cocktails</h1>
                    </div>
                    <div className="group-search">
                        <svg className="icon-search" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                        <input 
                            placeholder="Search recipe" 
                            type="search" 
                            className="input-search"
                            onChange={e => setSearchCocktails(e.target.value)}
                            />
                    </div>
                </div>              
                <div className="div-cocktails-list">
                    <div className="accordion-list-cocktails" id="accordionListCocktails">
                    {
                        searchDataCocktails(listCocktails).map((cocktail, i) => (
                            <div key={i} className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                <button 
                                    className="accordion-button" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target={'#collapse' + i}
                                    aria-expanded="true" 
                                    aria-controls="collapseOne">
                                <h3>{cocktail.name}</h3>    
                                </button>
                                </h2>
                                <div 
                                    id={'collapse' + i} 
                                    className="accordion-collapse collapse" 
                                    aria-labelledby="headingOne" 
                                    data-bs-parent="#accordionListCocktails">
                                <div className="accordion-body">
                                    <div>
                                        <p><b>Type of glass:</b> {cocktail.glass}</p>
                                        <p><b>Ingredients:</b> {cocktail.ingredients}</p>
                                    </div>
                                    
                                    <div>
                                        <p><b>Recipe:</b> {cocktail.recipe}</p>
                                    </div>
                                    <div>
                                        <p><b>comments:</b> {cocktail.comments}</p>
                                    </div>
                                    <div>
                                        <img src={cocktail.img} alt=''/>
                                    </div>
                                </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>        
                </div>
                
            </div>
        </>
    )
}