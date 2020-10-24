import React,{useEffect,useState} from 'react'
import '../css/reddit.css'



export default function Reddit() {
    const[redditData,setRedditData]=useState('')
    const[redditSearch,setRedditSearch]=useState('')
   
    useEffect(()=>{
       const  searchData=JSON.parse(localStorage.getItem('search-item'))
        if(localStorage.getItem('search-item')){
            setRedditSearch(searchData)
        }
        else{setRedditSearch("JoePera")}
    })
    
  
  
      function fetchData(){  
        fetch('https://www.reddit.com/search.json?q='+redditSearch)
        .then(response=>response.json())
        .then(result=>{

            let resultReddit=result.data.children.map(item=><div key={Math.random()}>{item.data.author}</div>)
            setRedditData(resultReddit)
            
        })
      }
        
       function handleclick(){
            if(redditSearch!==""){
                fetchData()
            }
        }
  
  
        return (
            <div>
                <button onClick={handleclick}>get reddit</button>
                {redditData}
            </div>
    )

    }