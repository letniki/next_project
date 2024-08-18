'use client'
import React, {FormEvent, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {getGenreMovies} from "@/services/api.service";
import {searchMovie} from "@/services/search.service";
import {IGenre} from "@/models/IGenres";
import MovieInfoComponent from "@/components/SearchContainer/MovieInfoComponent";
import PaginationComponent from "@/components/PaginationContainer/PaginationComponent";
import styles from './searchForm.module.css'
const SearchForm = () => {
    const [query, setSearchQuery] = useState('');
    const [submittedQuery, setSubmittedQuery] = useState<string>('');
    const [searchMovieResults, setSearchMovieResults] = useState<IGenre[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmittedQuery(query);
    };
    useEffect(() => {
        const fetchSearchMovies = async () => {
            const data = await searchMovie(submittedQuery, currentPage);
            setSearchMovieResults(data.results);
            console.log(data.results);
            setTotalPages(data.total_pages);
        };
        fetchSearchMovies();
        console.log(currentPage);
    }, [submittedQuery, currentPage]);

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
    const handleChange = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        submittedQuery!=query && setCurrentPage(1);
        // setSubmittedQuery(query);
    };

    return (
        <div>
            <div >
            <form onSubmit={handleSubmit} onChange={handleChange} className={styles.form}>
                <div>
                    <input className={styles.input}
                        type="text"
                        id="search"
                        value={query}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <button type='submit' className={styles.button}>Search</button>
            </form></div>
            <div className={styles.biggerBlock}>
            {searchMovieResults?.map(result=> <MovieInfoComponent key={result.id} movieId={result.id} page={currentPage}/>)}
            </div>
            {submittedQuery && (<div className={styles.pagination}>
                <button onClick={handlePreviousPage} className={styles.button} disabled={currentPage === 1}>
                    Previous
                </button>
                <h3 className={styles.h3}>You are on {currentPage}  page</h3>
                <button onClick={handleNextPage} className={styles.button} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>)}

        </div>
    );
};

export default SearchForm;