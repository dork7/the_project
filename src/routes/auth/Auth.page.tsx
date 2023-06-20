import SignInForm from '../../components/SignInForm/SignIn.component'
import SignUpForm from '../../components/SignUpForm/SignUp.component'
import './auth.styles.scss'
const AuthPage = () => {

    return (
        <div className='auth-container'>

            <SignInForm />

            <SignUpForm />
        </div>
    )
}

export default AuthPage