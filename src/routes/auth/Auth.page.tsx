import SignInForm from '../../components/SignInForm/SignIn.component'
import SignUpForm from '../../components/SignUpForm/SignUp.component'

const AuthPage = () => {

    return (
        <div style={{
            display: 'flex',
            gap: '2px',
            flexDirection: 'row',
            justifyContent: 'space-around'
        }}>

            <SignInForm />

            <SignUpForm />
        </div>
    )
}

export default AuthPage