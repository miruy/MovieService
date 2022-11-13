import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
    state = {
        loading: true,
        movies: []
    }

    getMovies = async () => {
        // ↓movies : axios - API의 movies
        const { data: { data: { movies } } } = await (axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating"));
        console.log(movies);
        // ↓movies : setState()의 movies
        this.setState({ movies, loading: false });

        // * axios - API의 movies를 setState()를 사용하여 state의 movies로 저장
    }

    // 보통 API를 componentDidMount()안에 fetch
    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { loading, movies } = this.state;
        return (
            <section className="container">
                {loading ?
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                    :
                    <div className="movies">
                        {movies.map(movie => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                }
            </section>
        );
    }
}

export default Home;