import React from 'react'
import { signInWithGooglePopup } from '../../utils/firebase.util'

const SignInComponent = () => {

    const logUserWithGoogle = async () => {
        const resp = await signInWithGooglePopup()
        console.log('resp', resp)
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