import React from 'react'

const Form =() =>{
    return(
        <form>
            <input type="text" className="input" placeholder="Username"/>
            <input type="text" className="input" placeholder="password"/>
            <div className="checkbox">
                <input type="checkbox" id="check"/>
                <label htmlFor="check">Keep me sign in </label>

            </div>
            <div className="sign-in-button">
                <a className="sign-in">SIGN IN</a>
                <p>Forget Password <span>Sign UP</span></p>
            </div>
        </form>
    )
}

export default Form
