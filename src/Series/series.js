import React, { useState, useEffect, useContext } from 'react';
import Slider from '../Slider/slider';
import List from '../List/list';

function Series(props) {
    const [movies, setMovies]=useState([]);
    const [error, setError]=useState(false);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/tv/top_rated?sort_by=popularity.desc&language=fr-FR&api_key=87dfa1c669eea853da609d4968d294be')
            .then(res=>res.json())
            .then(result=> {
            setMovies(result.results)
            },
            (error)=>{
                setError(true);
            }
        )
    },[]);
    console.log(movies);

   return (
       <div className="homeComponent container">

           <div className="">
                <div className="row sliderHome">
                    <Slider/>
                </div>
           </div>

            <div className="row">
                {movies.map((movie,i) => <List movie={movie} key={i} type="tv" className="listComponent" />)}
           </div>
           
       </div>
   );
}

export default Series;