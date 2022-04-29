import React, {useContext} from 'react'
import './BtnToogle.css'
import {ThemeContext} from '../../Contexte/ThemeContext'

export default function BtnToogle()
{
    const {toogleTheme, theme} = useContext(ThemeContext)

    return(
        <div 
        onClick={toogleTheme}
        className={theme ? 'btn-toogle goLight' : 'btn-toogle goDark'}>
            {theme ? "Dark" : "Light"}
        </div>
    )
}