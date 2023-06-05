import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase.util'

const SignInComponent = () => {
    const logUserWithGoogle = async () => {
        const { user } = await signInWithGooglePopup()

        const userDocRed = await createUserDocumentFromAuth(user)
        console.log('userDocRed', userDocRed)
    }

    return (
        <div>

            <button onClick={logUserWithGoogle}>
                SIGN-IN WITH GOOGLE
            </button>
        </div>
    )
}

export default SignInComponent