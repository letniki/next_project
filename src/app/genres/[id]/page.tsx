'use client'
import React, {useEffect, useState} from 'react';
import {getGenreMovies} from "@/services/api.service";
import styles from './genre.id.module.css'
import {urls} from "@/constants/urls";
import {IMovie} from "@/models/IMovie";
import Link from "next/link";
import Stars from "@/module/Stars";
import {IPaginatedMovie} from "@/models/IPaginatedMovie";
type Params = { id: string };
const GenrePage = ({params}:{params:Params}) => {
    const [genreMovies, setGenreMovies] = useState<IMovie[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    useEffect(() => {
        const fetchGenreMovies = async () => {
            const data:IPaginatedMovie = await getGenreMovies(params.id,currentPage);
            setGenreMovies(data.results);
            setTotalPages(500);
        };
        fetchGenreMovies();
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };
    return (
        <div>
            <div className={styles.biggerBlock}>
                {
                    genreMovies.map(genreMovie => <div key={genreMovie.id}>

                            <Link className={styles.Link}
                                  href={{pathname: '/movies/' + genreMovie.id, query: {data: JSON.stringify(genreMovie)}}}>

                                <div className={styles.block}>
                                    <h3 className={styles.h3}>{genreMovie.title}</h3>
                                    <img src={urls.poster + `${genreMovie.poster_path}`} alt={genreMovie.title}
                                         className={styles.img}/>
                                    <h3 className={styles.h3}>
                                        Rating: {genreMovie.vote_average}
                                    </h3>
                                    <div className={styles.Stars}>
                                        <Stars rating={genreMovie.vote_average} dimension={"18px"} spacing={'1px'}/>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    )

                }
            </div>
            <div className={styles.pagination}>
                <button className={styles.button} onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <h3 className={styles.h3}>You are on {currentPage} page</h3>
                <button className={styles.button} onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>

        </div>
    );
};

export default GenrePage;