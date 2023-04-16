import {Card} from "../components";
import {UseFetch} from "../hooks/useFetch";
import {UseTitle} from "../hooks/useTitle";


export const MovieList = ({apiPath, title}) => {
    // const [movies, setMovies] = useState([])
    const {data: movies} = UseFetch(apiPath)

    // useEffect(() => {
    //     document.title = `${title}`;
    // })
    UseTitle(`${title}`)
    return (
        <main>
            <section className={'max-w-7xl mx-auto py-7'}>
                <div className={'flex justify-start flex-wrap other:justify-evenly'}>
                    {movies && movies.map((movie) => (
                        <Card key={movie.id} movie={movie}/>
                    ))}


                </div>
            </section>

        </main>
    );
};