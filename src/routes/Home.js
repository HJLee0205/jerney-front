import React from "react";
import axios from "axios";
import Movie from "../components/Movie"


class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };

    // async : 싱크할때까지 기다려 달라
    // await : 무엇을 기다릴까?
    getMovies = async() => {
        const {data : {data : {movies}}} =
            await axios.get("https://yts-proxy.now.sh/list_movies.json");
        console.log(movies);
        this.setState({movies, isLoading: false});
    }

    // 마운트 된 후 실행되는 함수
    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <div>
                {isLoading ?
                    <div className="loader">
                        <span className="loader_text">로딩 중</span>
                    </div>
                    :
                    movies.map((movie) => {
                            return (
                                <div className="movies_container">
                                    <Movie
                                        key={movie.id}
                                        id={movie.id}
                                        year={movie.year}
                                        title={movie.title}
                                        summary={movie.summary}
                                        poster={movie.medium_cover_image}
                                    />
                                </div>
                            );
                        }
                    )
                }
            </div>
        );
    }
}


export default App;
