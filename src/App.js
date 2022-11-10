import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    loading: true,
    movies: []
  }

  getMovies = async () => {
    // ↓movies : axios - API의 movies
    const { data: { data: { movies } } } = await (axios.get("https://yts.mx/api/v2/list_movies.json"));

    // ↓movies : setState()의 movies
    this.setState({ movies, loading: false });

    // * axios - API의 movies를 setState()를 사용하여 state의 movies로 저장
  }

  // 보통 API를 componentDidMount()안에 fetch
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { loading } = this.state;
    return (
      <div>{loading ? "Loading..." : "We Are Ready!"}</div>
    );
  }
}

export default App;