import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editCocktail } from "../../features/cocktails/cocktailSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function EditP({idCocktail}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [editP, setEditP] = useState({
        glass: ''
    })
    const [editBtn, setEditBtn] = useState(false)
    
    const cocktails = useSelector(state => state.cocktails)
    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()
    

    const handleChange = e => {
        setEditP({
            ...editP,
            [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(editCocktail({ ...editP, id: params.id }))
        setShow(false);
        navigate("/cocktails-list")
    }
useEffect(() => {
    setShow(true)
    if (idCocktail) {
        setEditP(cocktails.find((cocktail) => cocktail.id === idCocktail))
    }
}, [])

    // const handleEditBtn = () =>{
    //     setEditBtn(true)
    //     setShow(true)
    //     if (id) {
    //         setEditP(cocktails.find((cocktail) => cocktail.id === id))
    //     }
    // }
    return(
        <>
            <div >
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{editP.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit} className="form">
                            <textarea 
                                className="form-control" 
                                id="exampleFormControlInput1"
                                name='glass'
                                type='text'
                                value={editP.glass}
                                onChange={e => handleChange(e)}
                                />
                            <textarea 
                                className="form-control" 
                                id="exampleFormControlInput1"
                                name='ingredients'
                                type='text'
                                value={editP.ingredients}
                                onChange={e => handleChange(e)}
                                />
                            <textarea 
                                className="form-control" 
                                id="exampleFormControlInput1"
                                name='recipe'
                                value={editP.recipe}
                                onChange={e => handleChange(e)}
                                />
                            <div className="div-buttons-submit">
                                <Button className="button-explore" onClick={handleSubmit}>
                                    Save Changes
                                </Button>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}