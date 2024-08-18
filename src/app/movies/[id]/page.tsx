
import React from 'react';
import styles from './MoviePage.module.css'
import {getMovieById} from "@/services/api.service";
import {urls} from "@/constants/urls";
import Link from "next/link";
import Stars from "@/module/Stars";
import {IMovieInfo} from "@/models/IMovieInfo";

type Params = {
    id: number;
}

const MoviePage = async ({params}: { params: Params }) => {
    const getMovie:IMovieInfo=await getMovieById(params.id);

return (
        <div className={styles.biggerBlock}>
            <div>
                <img src={urls.poster + getMovie.poster_path} alt={getMovie.title} className={styles.image}/>

                <p className={styles.p}>{getMovie.title}</p>
            </div>

            <div className={styles.divDescription}>
                <h3 >Genres </h3>
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
                    {getMovie.production_companies.map(company=> <div key={company.id}>{company.name} </div>)}
                    <h4>Runtime</h4>
                    <p>{getMovie.runtime}</p>
                </div>
            </div>
        </div>
    );
};

export default MoviePage;