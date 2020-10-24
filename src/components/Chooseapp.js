import React from 'react'
import { Link } from 'react-router-dom'
import '../css/chooseapp.css'
export default function Chooseapp() {
    return (
        <div className='app-window'>
            
            <Link to='/reddit'>
                <button>Reddit</button>
            </Link>
            <Link to='/youtube'>
                <button>Youtube</button>
            </Link>
        </div>
    )
}
