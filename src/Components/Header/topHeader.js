import React,{useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Navigation from './navigation'
import NavFieldPage from './navFieldPage'

const TopHeader = () => {

    const location = useLocation()

    const [title,setTitle] = useState('')

    useEffect(() => {

        location.pathname === "/" ? setTitle("Acceuil") : setTitle("Mes interventions")

    },[location])
    
    return( 

        <div className="wrapToolBar">
            <NavFieldPage title={title} />
            <Navigation/>
        </div>
    )
}


export default TopHeader