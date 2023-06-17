import React, { useEffect, useState } from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, auth } from '../../utils/firebase.util'
import { getRedirectResult } from 'firebase/auth'
import SignUpForm from '../../components/SignUpForm/SignUp.component'
import FormInput from '../FormInput/FormInput.component'
import Button from '../Button'
import { notifyMe } from '../../utils/notifications'
import './sigin.style.scss'

const defaultValues = {
    displayName: '', email: '', password: ''
}
const SignInForm = () => {

    const [formValues, setFormValues] = useState(defaultValues)
    const { displayName, email, password } = formValues

    const logUserWithGoogle = async () => {
        const { user } = await signInWithGooglePopup()

        const userDocRef = await createUserDocumentFromAuth(user)
        console.log('userDocRef', userDocRef)
    }
    // const logUserWithGoogleRedirect = async () => {
    //     const login = await signInWithGoogleRedirect()
    //     console.log('login', login)
    // }
    // getRedirectResult()

    useEffect(() => {


        (async () => {
            const response = await getRedirectResult(auth)
            if (response) {
                console.log('response', response)
                const userDocRef = await createUserDocumentFromAuth(response.user)
                console.log('userDocRef', userDocRef)
            }
        })()

    }, [])

    const handleChange = (event: any) => {
        const { name, value } = event.target
        setFormValues({
            ...formValues, [name]: value
        })
    }

    const formSubmitted = async (e: any) => {
        e.preventDefault()
        try {
            notifyMe({ title: "Success", msg: "User created" })

            await createUserDocumentFromAuth(user, { displayName })
        } catch (err: any) {

            notifyMe({ title: "Error", msg: err.code })

        }
    }

    return (
        <div style={{
            display: 'flex',
            gap: '2px',
            flexDirection: 'column'
        }}>





            <div className='sign-up-container'>
                <h2>
                    Have account? Sign In
                </h2>
                <form onSubmit={formSubmitted} style={{


                }}>
                    <FormInput label="Email" placeholder1='dev@dev.co' required onChange={handleChange} name='email' type='email' value={email} />
                    <FormInput label="Password" placeholder1='***************' required onChange={handleChange} name='password' type='password' value={password} />
                    <div className='sign-in-btn-group'>
                        <Button type='submit'  >
                            Sign In
                        </Button>
                        <Button buttonType="google" onClick={logUserWithGoogle}>
                            SIGN-IN WITH GOOGLE
                        </Button>
                    </div>
                    {/* <Button buttonType="google" onClick={signInWithGoogleRedirect}>
                        SIGN-IN WITH GOOGLE REDIRECT
                    </Button> */}
                </form>
            </div>

        </div>
    )
}

export default SignInForm