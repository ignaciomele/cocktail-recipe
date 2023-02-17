import React from "react";
import './addCocktail.css'
import Form from "../form/Form";
import Login from '../../components/login/Login';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/auth/userSlice';


export default function AddCocktail() {
    const user = useSelector(selectUser)
    return (
        <>
            {user ? (
                <div className="div-form-cocktail">
                    <Form/>
                </div>
                ) 
                :
                <Login/>
            }
        </>
    )
}