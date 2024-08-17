'use client'
import React, {FC, useEffect, useState} from 'react';
import {IMovieInfo} from "@/models/IMovieInfo";
import {getMovieById} from "@/services/api.service";
import {searchMovie} from "@/services/search.service";
import {IGenre} from "@/models/IGenres";
import Link from "next/link";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";
import {urls} from "@/constants/urls";
import styles from "@/app/movies/movies.page.module.css";
import PaginationComponent from "@/components/PaginationContainer/PaginationComponent";

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
        <div>
            <div><Link className={styles.Link} href={{pathname: '/movies/' + searchMovieById?.id, query: {data: JSON.stringify(searchMovieById)}}}>
                {searchMovieById &&<div>
                    <div>{searchMovieById.title}</div>
                    <img src={`${urls.poster}${searchMovieById.poster_path}`} alt={searchMovieById.title}/>
                </div>}</Link>
            </div>
            <div>
            </div>
        </div>

    );
    // <PaginationComponent page={1} pathname={`search?query=${submittedQuery}`}/>
};

export default MovieInfoComponent;