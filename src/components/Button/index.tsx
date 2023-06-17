import './button.styles.css'
const BUTTON_TYPE_CLASSES: any = {
    google: 'google-sign-in',
    inverted: 'inverted'
}
const Button = ({ children, buttonType, ...rest }: any) => {
    return (
        <>
            {/* <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...rest}>
                {children}
            </button> */}
            <button className={` button-container  btn-slide ${BUTTON_TYPE_CLASSES[buttonType]}`} {...rest}>
                {children}
            </button>
        </>
    )
}

export default Button