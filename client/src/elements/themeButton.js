import React from 'react'
import * as themeManager from '../assets/js/themeManager.js'


export default async function generateThemeButtons(themes){

    let themeList = [];
    

    for (let theme in themes){
        themeList.push(ThemeButton(theme, themes[theme]))
    }

    // try {
    // } catch (e) {}

    return themeList;
}

function themeClick(colors){
    return themeManager.setTheme({'color-background': colors.background,'color-text-pri': colors.primary,'color-text-acc': colors.accent})
}




function ThemeButton(theme, themes){
    return (
        <button data-theme={theme} class={"theme-button theme-" + theme} onClick={() => themeClick(themes.colors)}>{themes.name}</button>
    )
}