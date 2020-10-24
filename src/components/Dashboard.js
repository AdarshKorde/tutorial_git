import React,{ useEffect, useState} from 'react'
import {Route,Link, BrowserRouter} from 'react-router-dom'
import '../css/dashboard.css'
import styled from 'styled-components'



// Js
export default function Dashboard({searchData}) {
    const [search, setsearch] = useState('')
    const [searchTerm,setSearchTerm]=useState('')
    
   
    
    function handleChange(e){
        setsearch(e.target.value)
    }
   
    function handleSubmit(e){
            e.preventDefault()
            setSearchTerm(search)
          
    }
        
    useEffect(()=>{
            localStorage.setItem('search-item',JSON.stringify(search))
    },)
    function handleState(){
        setsearch("Universe")
    }
    
   
    
    
    
    // Render Method
    return(
        
        <React.Fragment>
            
            <div  className='search-container' >
                <form onClick={handleSubmit} >         
                    <input type='text' value={search} onChange={handleChange} id='search-bar'/>
                    <Link to='/chooseapp'>
                    <input style={{height:'0.0001px',width:'0.0001px',backgroundColor:'white' ,border:'none'}} type='submit' value='search' />  
                    <img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/>
                    </Link>
                </form>
            </div>
            
            
        </React.Fragment>
        
          
    )
}
    