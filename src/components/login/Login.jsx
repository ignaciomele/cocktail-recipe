import React, {useState} from "react";
import './login.css'
import swal from "sweetalert";

export default function Login() {
    const [dataLogin, setDataLogin] = useState({
        name: { placeholder: 'Username', type: 'text', value: '' },
        password: { placeholder: 'Password', type: 'password', value: '' }
    })
    const [btnLogin, setBtnLogin] = useState('Log in')

    const handleChange = e => {
        const { name, value } = e.target
        setDataLogin(prevState => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                value
            }
        }))
    }
    const addDataCocktail = async e => {
        e.preventDefault()
        setBtnLogin('Login...')
        try {
            swal({
                title: "The username or password doesn't match any account. Please try again",
                icon: "error",
                button: "accept",
                timer: "3000"
            });
            setTimeout(() => {
                setBtnLogin('Log in')
            }, 2000);
            dataLogin.name.value = ''
            dataLogin.password.value = ''
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <>
        <div className="div-login">
            <div className="div-form-login">
                <div className="header-login">
                    <h1>Welcome to Cocktail recipes</h1>
                </div>
                <div className="title-login">
                    <h3>Log in</h3>
                </div>
                <form onSubmit={e => {addDataCocktail(e)}} className="form-login">
                    {Object.keys(dataLogin).map(keyName => {
                        return <input
                        className="form-control-login" 
                        key={keyName}
                        type={dataLogin[keyName].type}
                        placeholder={dataLogin[keyName].placeholder}
                        name={keyName}
                        value={dataLogin[keyName].value}
                        onChange={e => handleChange(e)}
                        required
                        />
                    })}
                    <button type="submit" class="btn-login">{btnLogin}</button>
                </form>
            </div>            
        </div>           
        
        </>
    )
}