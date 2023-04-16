import {Card} from "../components";
import {UseFetch} from "../hooks/useFetch";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {UseTitle} from "../hooks/useTitle"

export const Search = ({apiPath}) => {
    const [searchParams] = useSearchParams()
    const queryTerm = searchParams.get('q')


    const {data: movies} = UseFetch(apiPath, queryTerm)
    const pageTitle = UseTitle(`Search ${queryTerm}`)
    // useEffect(() => {
    //     document.title = `Search ${queryTerm}`;
    // })
    return (
        <main>
            <section className={'py-7'}>
                <p className={'text-3xl text-gray-700 dark:text-white'}>{movies.length === 0 ? `no result found for this particular '${queryTerm}'` : `Result for '${queryTerm}'`}</p>
            </section>

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