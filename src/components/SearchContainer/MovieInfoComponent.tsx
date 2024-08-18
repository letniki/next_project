'use client'
import React, {FC, useEffect, useState} from 'react';
import {IMovieInfo} from "@/models/IMovieInfo";
import {getMovieById} from "@/services/api.service";
import Link from "next/link";
import {urls} from "@/constants/urls";
import styles from './MovieInfo.module.css';
import Stars from "@/module/Stars";

interface IProps{
    movieId:number,
    page:number
}

const MovieInfoComponent:FC<IProps> = ({movieId, page}) => {

    const [searchMovieById, setSearchMovieById] = useState<IMovieInfo | undefined>();
    useEffect(() => {
    const fetchSearchMovies = async () => {
        const movieById = await getMovieById(movieId);

        setSearchMovieById(movieById);
    };
    fetchSearchMovies();

}, [movieId]);
    return (

        <div className={styles.biggerBlock}>
            <div><Link className={styles.Link} href={{pathname: '/movies/' + searchMovieById?.id, query: {data: JSON.stringify(searchMovieById)}}}>
                {searchMovieById?.poster_path && <div className={styles.block}>

                    <h3 className={styles.h3}>{searchMovieById.title}</h3>
                    <img className={styles.image} src={`${urls.poster}${searchMovieById.poster_path}`} alt={searchMovieById.title}/>
                    <div className={styles.smallerBlock}>
                        {searchMovieById.genres.map(genre => <Link key={genre.id} href={'/genres/' + genre.id} className={styles.badge}>
                            <span>{genre.name} </span>
                        </Link>)}
                    </div>
                    <div className={styles.Stars}>
                        <Stars rating={searchMovieById.vote_average} dimension={"18px"} spacing={'1px'}/>
                    </div>
                </div>}</Link>
            </div>

        </div>
    );
};

export default MovieInfoComponent;