'use client'
import React, {FC, useEffect, useState} from 'react';
import {IMovieInfo} from "@/models/IMovieInfo";
import {getMovieById} from "@/services/api.service";
import {searchMovie} from "@/services/search.service";
import {IGenre} from "@/models/IGenres";
import Link from "next/link";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";
import {urls} from "@/constants/urls";
import styles from './MovieInfo.module.css';
import PaginationComponent from "@/components/PaginationContainer/PaginationComponent";
import Stars from "@/module/Stars";

interface IProps{
    movieId:number,
    page:number
}

const MovieInfoComponent:FC<IProps> = ({movieId,page}) => {

    const [searchMovieById, setSearchMovieById] = useState<IMovieInfo | undefined>();
    useEffect(() => {
        console.log(movieId);
    const fetchSearchMovies = async () => {
        const movieById = await getMovieById(movieId);

        console.log(movieById);
        setSearchMovieById(movieById);
        // setTotalPages(500);
    };
    fetchSearchMovies();

}, [movieId]);
    // let movieById:IMovieInfo = await getMovieById(movieId);
    // console.log(movieById);
    return (

        <div className={styles.biggerBlock}>
            <div><Link className={styles.Link} href={{pathname: '/movies/' + searchMovieById?.id, query: {data: JSON.stringify(searchMovieById)}}}>
                {searchMovieById?.poster_path && <div className={styles.block}>

                    <h3 className={styles.h3}>{searchMovieById.title}</h3>
                    <img className={styles.image} src={`${urls.poster}${searchMovieById.poster_path}`} alt={searchMovieById.title}/>
                    <div className={styles.smallerBlock}>
                        {searchMovieById.genres.map(genre => <Link key={genre.id} href={'/genres/' + genre.id}
                                                                   className={styles.badge}><span
                        >{genre.name} </span></Link>)}
                    </div>
                    <div className={styles.Stars}>
                        <Stars rating={searchMovieById.vote_average} dimension={"18px"} spacing={'1px'}/>
                    </div>
                </div>}</Link>
            </div>

        </div>
    );
    // <PaginationComponent page={1} pathname={`search?query=${submittedQuery}`}/>
};

export default MovieInfoComponent;