import {useEffect, useState} from "react";

export const UseFetch = (apiPath, queryTerm = "") => {
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json.results);
            setData(json.results);
        }

        fetchMovies();
    }, [url])

    return {data}
};