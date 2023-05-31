import React from 'react'
import classes from '../modules/MovieList.module.css'

const MovieList = (props) => {
    const klasebi = `${classes.clients} row`;

  return (
    <>
    <div className='container mt-32'>
    <div className={klasebi}>
    {props.movies.map((movie,index)=>
    <div className='row'>
        <img src={movie.Poster} className={classes.image}></img>
        </div>
    )}
    </div>
    </div>
    </>
  )
}

export default MovieList