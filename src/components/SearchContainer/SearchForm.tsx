'use client'
import React, {FormEvent, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {getGenreMovies} from "@/services/api.service";
import {searchMovie} from "@/services/search.service";
import {IGenre} from "@/models/IGenres";
import styles from "@/app/genres/[id]/genre.id.module.css";
import MovieInfoComponent from "@/components/SearchContainer/MovieInfoComponent";
import PaginationComponent from "@/components/PaginationContainer/PaginationComponent";

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

    return (
        <div>
            <div className={styles.form}>
            <h1>Search:</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="search">Search:</label>
                    <input
                        type="text"
                        id="search"
                        value={query}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <button type='submit' >Submit</button>
            </form></div>
            {searchMovieResults?.map(result=> <MovieInfoComponent key={result.id} movieId={result.id} page={currentPage}/>)}
            {/*{searchMovieResults &&(<MoviesInfoComponent results={searchMovieResults} page={currentPage}/>)}*/}
            {submittedQuery && (<div className={styles.pagination}>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>{currentPage} / {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>)}
            {/*<PaginationComponent page={1} pathname={`search?query=${submittedQuery}`}/>*/}


        </div>
    );
};

export default SearchForm;