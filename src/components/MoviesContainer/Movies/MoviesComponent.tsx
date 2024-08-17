// 'use client'

//
// // type IProps={
// //     results:IMovie[],
// //     page: number,
// // }
// import {useEffect, useState} from "react";
// import {IMovie} from "@/models/IMovie";
// import {getAllMovies} from "@/services/api.service";
// import Link from "next/link";
// // import PaginationComponent from "@/components/PaginationContainer/PaginationComponent";
//
// const MoviesComponent = () => {
//     const [movies, setMovies] = useState<IMovie[]>([]);
//     const [currentPage, setCurrentPage] = useState<number>(1);
//     const [totalPages, setTotalPages] = useState<number>(1);
//
//     useEffect(() => {
//         const fetchMovies = async () => {
//             const data = await getAllMovies(currentPage);
//             setMovies(data.results);
//             setTotalPages(500);
//         };
//         fetchMovies();
//         console.log(currentPage);
//     }, [currentPage]);
//
//     const handleNextPage = () => {
//         if (currentPage < totalPages) {
//             setCurrentPage((prevPage) => prevPage + 1);
//         }
//     };
//
//     const handlePreviousPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage((prevPage) => prevPage - 1);
//         }
//     };
//
//     return (
//         <div>
//             {
//                  movies.map(result => <div key={result.id}>
//                     <div>-{result.title}</div>
//                     <Link href={{pathname: '/movies/' + result.id, query: {data: JSON.stringify(result)}}}>
//                         <img src={`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`} alt={result.title}/>
//                     </Link>
//
//
//                 </div>)
//             }
//             {/*<PaginationComponent currentPage={currentPage}/>*/}
//             <div>
//                 <button onClick={handlePreviousPage} disabled={currentPage === 1}>
//                     Previous
//                 </button>
//                 <span>{currentPage} / {totalPages}</span>
//                 <button onClick={handleNextPage} disabled={currentPage === totalPages}>
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// };
//
// export default MoviesComponent;