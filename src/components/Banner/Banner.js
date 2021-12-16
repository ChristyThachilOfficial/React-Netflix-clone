import React,{useEffect,useState} from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY,ImgUrl} from '../../constants/constants'




function Banner() {
    const [movie,setMovie] = useState()
    
    useEffect(()=>{
        axios.get(`trending/all/day?api_key=${API_KEY}`).then((response)=>{
            
            setMovie(response.data.results[Math.floor(Math.random() * (response.data.results.length))])
           
            
        })
    },[])
    return (
        <div className='banner' style={{backgroundImage: `url(${movie ? ImgUrl+movie.backdrop_path : ''})`}}>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : ` `}</h1>
                <div className='banner_buttnos'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div >
                <h1 className='discription'>{movie ? movie.overview :''}</h1>
            </div>
            <div className="fade">
                
            </div>
        </div>
    )
}

export default Banner
