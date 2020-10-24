import React,{useEffect, useState} from 'react'


export default function Youtube( ) {
    const[ytData,setYtData]=useState('')
   const[searchYt,setYtSearch]=useState('')

    useEffect(()=>{

        const  searchData=JSON.parse(localStorage.getItem('search-item'))
        if (localStorage.getItem('search-item')){
            setYtSearch(searchData)
        }
        
    })

    function fetchData(){  
        fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+searchYt+'&maxResults=10&key=AIzaSyCB_JH7NlUZYSe1R9UPPuZuIqyCfLr7akY')
        .then(response=>response.json())
        .then(data=>{

            let resultYt=data.items.map(item=><div key={Math.random()}>{item.snippet.title}</div>)
            setYtData(resultYt)
            
        })
        
    }
    function handleClick(){

        console.log(searchYt)
        if (searchYt!==""){
            fetchData()

        }
    }

    return (
        <div>
            <button onClick={handleClick}>click me</button>
            {ytData}
        </div>
    )
}
