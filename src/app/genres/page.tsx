import React from 'react';
import {getAllGenres} from "@/services/genres.service";
import Link from "next/link";
import styles from './genres.module.css'
import {IGenre} from "@/models/IGenres";
const GenresPage = async () => {
let allGenres =await getAllGenres();
    return (
        <div className={styles.genres}>
            {
                allGenres.map(
                    (genre, index) =>

                            <Link key={genre.id}
                                href={{pathname:'/genres/'+ genre.id, query:{data:JSON.stringify(genre)}}}
                                className={styles.genreLink}>
                                {genre.name}
                            </Link>
                )
            }
        </div>
    );
};

export default GenresPage;