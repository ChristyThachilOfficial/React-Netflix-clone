import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { ImgUrl,API_KEY } from '../../constants/constants'
import Youtube from 'react-youtube'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId,seturlId] = useState('')
   
    useEffect(() => {
        
        axios.get(props.url).then((response) => {

            console.log(response.data.results)
            setMovies(response.data.results)

        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    }

    const handleMovie = (id)=>{
        console.log(id)
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length !== 0){
                seturlId(response.data.results[0])
            }else{
                console.log('no videos found in youtube')
            }
            
        })
    }

   

    return (

        <div className='row'>
            <h2>{props.title}</h2>
            
            <div className='posters'>
            {movies.map((movie)=>
                <img onClick={()=>handleMovie(movie.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${ImgUrl+movie.backdrop_path}`} alt="" />
            )}
                
            </div>
            {urlId && <Youtube opts={opts} videoId={urlId.key} onEnd={()=>{seturlId('')}}/> }
                
        </div>


    )
}

export default RowPost
