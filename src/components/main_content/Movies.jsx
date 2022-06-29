import React from "react";
import st from './Movies.module.css'

const Movies = ()=>{
    return(
        <div className={st.movies}>
            <div>Comedy</div>
            <div>Melodrama</div>
            <div>Adventure movie</div>
            <div>Western</div>
            <div>Action</div>
            <div>Horror</div>
            <div>Thriller</div>
            <div>Detective</div>
        </div>
    )
}

export default Movies;