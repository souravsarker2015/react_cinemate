import {Card} from "../components";
import {useEffect, useState} from "react";

export const MovieList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=0645c7f0e9836f6de865beb453edcdd3");
            const data = await response.json();
            console.log(data.results);
            setMovies(data.results);
        }

        fetchMovies()
    }, [])

    return (
        <main>
            <section className={'max-w-7xl mx-auto py-7'}>
                <div className={'flex justify-start flex-wrap'}>
                    {movies && movies.map((movie) => (
                        <Card key={movie.id} movie={movie}/>
                    ))}


                </div>
            </section>

        </main>
    );
};