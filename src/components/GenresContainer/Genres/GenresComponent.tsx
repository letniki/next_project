// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {movieActions} from "@/redux/slices/movieSlice";
//
// const GenreLists = () => {
//     const router = useRouter();
//     const { id: with_genres } = router.query;
//     const page = router.query.page || '1';
//
//     const { movie } = useSelector((state) => state.movie);
//     const dispatch = useDispatch();
//
//     useEffect(() => {
//         if (with_genres) {
//             dispatch(movieActions.getMovieByGenre({ page, with_genres }));
//         } else {
//             dispatch(movieActions.getAll({ page }));
//         }
//     }, [page, with_genres, dispatch]);
//
//     const setQuery = (newPage) => {
//         router.push({
//             pathname: router.pathname,
//             query: { ...router.query, page: newPage },
//         });
//     };
//
//     return (
//         <div>
//             <Movies page={page} movies={movie} setQuery={setQuery} />
//         </div>
//     );
// };
//
// export default GenreLists;
//
//
//
//
//
// // let allGenres = getAllGenres();
// // console.log(allGenres);