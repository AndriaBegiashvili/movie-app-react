import { useState } from 'react'
import MovieList from './components/MovieList'
import Header from './components/Header'
import './App.css'


function App() {
  const [movies, setMovies] = useState([
    {
      "Title": "John Wick",
      "Year": "2014",
      "imdbID": "tt2911666",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
      },
      {
      "Title": "John Wick: Chapter 2",
      "Year": "2017",
      "imdbID": "tt4425200",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_SX300.jpg"
      },
      {
      "Title": "John Wick: Chapter 3 - Parabellum",
      "Year": "2019",
      "imdbID": "tt6146586",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg"
      },
      {
      "Title": "John Wick: Chapter 4",
      "Year": "2023",
      "imdbID": "tt10366206",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg"
      },
      {
      "Title": "John Wick: Chapter 3 - Parabellum: HBO First Look",
      "Year": "2019",
      "imdbID": "tt10275370",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYmI2NTIzNWYtYjVkNi00ZmRkLTlkYmUtZTU5YjVjNDMzMTdkXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
      },
      {
        "Title": "John Wick: Chapter 2",
        "Year": "2017",
        "imdbID": "tt4425200",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_SX300.jpg"
        },
        {
        "Title": "John Wick: Chapter 3 - Parabellum",
        "Year": "2019",
        "imdbID": "tt6146586",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg"
        },
        {
        "Title": "John Wick: Chapter 4",
        "Year": "2023",
        "imdbID": "tt10366206",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg"
        },
        {
        "Title": "John Wick: Chapter 3 - Parabellum: HBO First Look",
        "Year": "2019",
        "imdbID": "tt10275370",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmI2NTIzNWYtYjVkNi00ZmRkLTlkYmUtZTU5YjVjNDMzMTdkXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
        },
    
  ])

  return (
    <>
    <Header/>
    <MovieList movies={movies} />
      
    </>
  )
}

export default App
