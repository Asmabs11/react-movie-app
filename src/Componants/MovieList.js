import MovieCard from "./MovieCard";

const MovieList = ({movies, searchTitle, searchRating}) => {
    return (
        <div style={{display: 'flex', flexWrap:'wrap', justifyContent: "space-around"}}>
        {movies.filter((el)=> el.rating >= searchRating)
        .filter((el)=> el.title.toLowerCase().includes(searchTitle))
        .map((el, index)=> <MovieCard {...el} key={index}/>)}
        </div>
    )
}

export default MovieList;