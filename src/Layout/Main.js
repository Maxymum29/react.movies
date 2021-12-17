import { Component } from 'react';

import Movies from '../Components/Movies';
import Preloader from '../Components/Preloader';
import Search from '../Components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            loading: true,
        };
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?${API_KEY}&s=matrix&`)
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
            .catch(console.log('error'));
    }

    searchMovies = (str, type = 'all') => {
        this.setState({ loading: true });

        fetch(
            `http://www.omdbapi.com/?${API_KEY}&s=${str}${
                type !== 'all' ? `&type=${type}` : ''
            }&`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
            .catch(console.log('error'));
    };

    render() {
        const { movies, loading } = this.state;

        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies} />
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        );
    }
}

export default Main;
