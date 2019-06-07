import React, { useState, useEffect } from 'react';

function Detail({match},props) {

    const id = match.params.id;
    const type = match.params.type;
    console.log(id);
    console.log(type);

    const [movie, setMovie]=useState([]);
    const [error, setError]=useState(false);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/'+type+'/'+id+'?api_key=87dfa1c669eea853da609d4968d294be&language=en-US')
            .then(res=>res.json())
            .then(result=> {
            setMovie(result)
            },
            (error)=>{
                setError(true);
            }
        )
    },[]);
    console.log(movie);
   return (
       <div className="">

        <div className="row">
            
            Vous êtes sur la page detail : {id}
            <h1>{movie.title ? movie.title : movie.name}</h1>          
            </div>
        
       </div>
   );

}

export default Detail;