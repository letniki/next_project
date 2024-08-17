'use client'
import React, {useEffect, useState} from 'react';
import {getAllMovies, getGenreMovies} from "@/services/api.service";
import styles from './genre.id.module.css'
import {urls} from "@/constants/urls";
import {IMovie} from "@/models/IMovie";
import Link from "next/link";
type Params = { id: string };
const GenrePage = ({params}:{params:Params}) => {
    console.log(JSON.parse(params.id));
    const [genreMovies, setGenreMovies] = useState<IMovie[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    useEffect(() => {
        const fetchGenreMovies = async () => {
            const data = await getGenreMovies(params.id,currentPage);
            setGenreMovies(data.results);
            setTotalPages(500);
        };
        fetchGenreMovies();
        console.log(currentPage);
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
        <div className={styles.idGenre}>
           {
                genreMovies.map(genreMovie =>
                    <div className={styles.divGenre} key={genreMovie.id}>
                    <div >
                        <Link href={{pathname: '/movies/' + genreMovie.id, query: {data: JSON.stringify(genreMovie)}}}>
                            <img src={urls.poster + `${genreMovie.poster_path}`} alt={genreMovie.title}
                                 className={styles.img}/>
                        </Link>
                        <p className={styles.genreParagraph}>{genreMovie.title}</p>
                    </div>
                    </div>
                )

            }
                <div className={styles.pagination}>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>{currentPage} / {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default GenrePage;