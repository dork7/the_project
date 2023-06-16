import { useState } from 'react'
import { createAuthUserWithEmailPassword, createUserDocumentFromAuth } from '../../utils/firebase.util'
import { notifyMe } from '../../utils/notifications'
import FormInput from '../FormInput/FormInput.component'
import './signup.style.scss'
const defaultValues = {
    displayName: '', email: '', password: ''
}
const SignUpForm = () => {

    const [formValues, setFormValues] = useState(defaultValues)
    const { displayName, email, password } = formValues
    const formSubmitted = async (e: any) => {
        e.preventDefault()
        try {
            const { user }: any = await createAuthUserWithEmailPassword(email, password)
            notifyMe({ title: "Success", msg: "User created" })

            await createUserDocumentFromAuth(user, { displayName })
        } catch (err: any) {
            if (err.code === "auth/email-already-in-use") {
                notifyMe({ title: "Error", msg: "Email already in use" })
            } else {
                console.log('err', err.code)
                notifyMe({ title: "Error", msg: err.code })
            }
        }
    }

    const handleChange = (event: any) => {
        const { name, value } = event.target
        setFormValues({
            ...formValues, [name]: value
        })
    }

    return (
        <div className='sign-up-container'>
            <h2>
                Don't have an account
            </h2>
            <form onSubmit={formSubmitted} style={{


            }}>
                <FormInput label="Display Name" placeholder1='Your name' required onChange={handleChange} name='displayName' value={displayName} />
                <FormInput label="Email" placeholder1='dev@dev.co' required onChange={handleChange} name='email' type='email' value={email} />
                <FormInput label="Password" placeholder1='***************' required onChange={handleChange} name='password' type='password' value={password} />
                <button type='submit'>
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default SignUpForm