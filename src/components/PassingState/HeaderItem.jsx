import headerIcon from '/public/Sample_User_Icon.png'
import React from 'react'

export default function HeaderItem(props){

    return(
        <header>
            <img src={headerIcon} className="user-icon"/>
            <span>{props.userName}</span>
        </header>
    )

}