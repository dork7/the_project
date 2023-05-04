import React, { useState } from 'react'
import { ThemeContextProvider } from './ThemeContext'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
const Box = () => {
    const theme = useContext(ThemeContext)
    const [themeColor, setThemeColor] = useState('primary')
    return (
        <ThemeContextProvider>
            <button onClick={() => { setThemeColor('secondary') }}>
                Toggle theme
            </button>
            <div style={{
                backgroundColor: theme.primary.main,
                color: theme.primary.text
            }}>Box</div>
        </ThemeContextProvider>
    )
}

export default Box