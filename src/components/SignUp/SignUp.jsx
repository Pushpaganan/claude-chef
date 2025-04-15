import React from 'react';
import ReactDom from 'react-dom/client';

function SignUp(formData)
{
    console.log(formData.get("email"));
    console.log(formData.get("password"));
}

export default function SignUpComponent() {
    return (
        <section>
            <h1> Sign Up Form</h1>
            <form action={SignUp}>
                <label htmlFor='email'>Email:
                    <input id="email" type="email" name="email" placeholder="Email" />
                </label>
                <br />
                <label htmlFor='password'>Password:
                    <input id="password" type="password" name="password" placeholder="Password" />
                </label>
                <br/>
                <button>SignUp</button>
            </form>
        </section>
    )
}
