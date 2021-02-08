import React from "react"
import {useHistory} from 'react-router-dom'
import Eclipse from '../Design/Badges/eclipse'

const NavAcceuil = () => {

    const history = useHistory()

    return(

        <div className="wrapNavAcceuil">
            <nav >
                <ul>
                    <li className="navLinkAcceuil" onClick={()=>history.push('/interventions')}>
                        <div className="navLinkAcceuilArrow"></div>
                        <div>
                            <p>Mes interventions</p>
                        </div>
                        <span>
                            <Eclipse/>
                        </span>
                    </li>
                    <li className="navLinkAcceuil">
                        <div className="navLinkAcceuilHistorik"></div>
                        <div>
                            <p>Historique</p>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavAcceuil