// 'use client'
// import React from 'react';
// import {IMovie} from "@/models/IMovie";
// import StarRatings from "react-star-ratings";
//
// const MoviePage = ({searchParams}:any) => {
//     let movie: IMovie = JSON.parse(searchParams.data);
//     console.log(movie);
//
//     return (
//         <div>
//             {/*<div className={adult}>{icon.18+}</div> todo adult */}
//             {movie.original_title}-{movie.overview}
//
//             <h3>Rating: {movie.vote_average}</h3>
//             <div>
//                 <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie.original_title"/>
//             </div>
//             <StarRatings rating={movie.vote_average}
//                          starRatedColor="#4F8AC1"
//                          numberOfStars={10}
//                          name='rating'
//                          starDimension="30px"
//                          starSpacing="4px"/>
//         </div>
//
//     );
// };
//
// export default MoviePage;




import React from 'react';
import styles from './MoviePage.module.css'
import {getGenreMovies, getMovieById} from "@/services/api.service";
import {urls} from "@/constants/urls";
import Link from "next/link";
import StarRatings from "react-star-ratings";
import Stars from "@/module/Stars";
import {IMovieInfo} from "@/models/IMovieInfo";

type Params = {
    id: number;
}

const MoviePage = async ({params}: { params: Params }) => {
    const getMovie:IMovieInfo=await getMovieById(params.id);

return (
        <main className={styles.main}>
            <div>
                <img src={urls.poster + getMovie.poster_path} alt={getMovie.title} />

                <p className={styles.titleMovie}>{getMovie.title}</p>
            </div>


            <div className={styles.divDescription}>
                <div><b>Genres: </b></div>
                <div className={styles.block}>{getMovie.genres.map(genre => <Link key={genre.id} href={'/genres/'+ genre.id} className={styles.badge}><span
                         > {genre.name}</span></Link>
                )}</div>
                <h3>Rating</h3>
                <Stars rating={getMovie.vote_average} dimension={"25px"} spacing={'5px'}/>
                <div>
                    <p><b>Release: </b>{getMovie.release_date}</p>
                    <p><b>Budget: </b> ${getMovie.budget}</p>
                    <p><b>Overview: </b> {getMovie.overview}</p>
                    <h4>Companies: </h4>
                    {getMovie.production_companies.map((company,index)=> <div key={company.id}>{index+1}.{company.name} </div>)}
                    <h4>Runtime</h4>
                    {getMovie.runtime}
                </div>
            </div>
        </main>
    );
};

export default MoviePage;