import React from 'react'

const Navigation = () => {

    return(

        <nav>
            <ul className="navMenu">
                <li className="navLogo navLink"></li>
                <li className="navName navLink">Bonjour, John</li>
                <li className="navLink navDate">08/02/2021</li>
                <li className="navLink"><i className="fas fa-sign-in-alt fa-lg iconLogo"></i></li>
            </ul>
        </nav>
    )
}


export default Navigation