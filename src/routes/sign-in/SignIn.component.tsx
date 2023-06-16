import React, { useEffect } from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, auth } from '../../utils/firebase.util'
import { getRedirectResult } from 'firebase/auth'
import SignUpForm from '../../components/SignUpForm/SignUp.component'

const SignInComponent = () => {
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



    return (
        <div style={{
            display: 'flex',
            gap: '2px',
            flexDirection: 'column'
        }}>

            <button onClick={logUserWithGoogle}>
                SIGN-IN WITH GOOGLE
            </button>

            <button onClick={signInWithGoogleRedirect}>
                SIGN-IN WITH GOOGLE REDIRECT
            </button>

            <SignUpForm />
        </div>
    )
}

export default SignInComponent