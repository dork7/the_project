import { getRedirectResult } from 'firebase/auth'
import { useContext, useEffect, useState } from 'react'
import { auth, createUserDocumentFromAuth, signInAuthWIthUserNamePassword, signInWithGooglePopup } from '../../utils/firebase.util'
import { notifyMe } from '../../utils/notifications'
import Button from '../Button'
import FormInput from '../FormInput/FormInput.component'
import './sigin.style.scss'
import { UserContext } from '../../contexts/user.context'


const defaultValues = {
    email: 'dev@dev.co', password: '123123'
}
const SignInForm = () => {
    const { setCurrentUser } = useContext(UserContext)

    const [formValues, setFormValues] = useState(defaultValues)
    const { email, password } = formValues

    const logUserWithGoogle = async () => {
        const { user } = await signInWithGooglePopup()
        // setCurrentUser(user)
        await createUserDocumentFromAuth(user, {})

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

            const { user }: any = await signInAuthWIthUserNamePassword(email, password)
            // setCurrentUser(user)
            notifyMe({ type: "success", msg: "Logged in" })

        } catch (err: any) {
            notifyMe({ type: "error", msg: err.code ?? err })

        }
    }

    return (






        <div className='sign-up-container'>
            <h2>
                Have account? Sign In
            </h2>
            <span> Sign-in with your email and password</span>
            <form onSubmit={formSubmitted} style={{


            }}>
                <FormInput label="Email" placeholder1='dev@dev.co' required onChange={handleChange} name='email' type='email' value={email} />
                <FormInput label="Password" placeholder1='***************' required onChange={handleChange} name='password' type='password' value={password} />
                <div className='sign-in-btn-group'>
                    <Button type='submit'  >
                        Sign In
                    </Button>
                    <Button type='button' buttonType="google" onClick={logUserWithGoogle}>
                        GOOGLE SIGN-IN
                    </Button>
                </div>
                {/* <Button buttonType="google" onClick={signInWithGoogleRedirect}>
                        SIGN-IN WITH GOOGLE REDIRECT
                    </Button> */}
            </form>
        </div>


    )
}

export default SignInForm