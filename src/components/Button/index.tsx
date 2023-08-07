import { BaseButton, GoogleSignIn, InvertedButton, SlideButton } from './button.styles.jsx'

export const BUTTON_TYPE_CLASSES: any = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
    small: 'small'
}
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
    return ({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignIn,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType])
}


const Button = ({ children, buttonType, ...rest }: any) => {

    const CustomButton = getButton(buttonType)
    console.log('CustomButton', CustomButton)
    return (
        <CustomButton {...rest}>
            {children}
        </CustomButton>

    )
}

export default Button