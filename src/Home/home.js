import React, { useState, useEffect } from 'react';
import './home.css';
import Slider from '../Slider/slider';
import List from '../List/list';

function Home(props) {

    const [movies, setMovies]=useState([]);
    const [error, setError]=useState(false);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/top_rated?sort_by=popularity.desc&language=fr-FR&api_key=87dfa1c669eea853da609d4968d294be')
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
                {movies.map((movie,i) => <List movie={movie} key={i} type="movie" className="listComponent" />)}

           </div>
           
       </div>
   );
}

export default Home;