import { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            type: 'all',
        };
    }

    handelFilter = (e) => {
        this.setState(
            () => ({ type: e.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    handelKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    getSearch = (e) => {
        this.setState({ search: e.target.value });
    };

    render() {
        const { search, type } = this.state;
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            className="validate"
                            placeholder="search"
                            type="search"
                            value={search}
                            onChange={this.getSearch}
                            onKeyDown={this.handelKey}
                        />
                        <button
                            className="btn search-btn"
                            onClick={() =>
                                this.props.searchMovies(search, type)
                            }
                        >
                            Search
                        </button>
                        <div>
                            <label className="label">
                                <input
                                    name="type"
                                    type="radio"
                                    data-type="all"
                                    onChange={this.handelFilter}
                                    checked={type === 'all'}
                                />
                                <span>All</span>
                            </label>

                            <label className="label">
                                <input
                                    name="type"
                                    type="radio"
                                    data-type="movie"
                                    onChange={this.handelFilter}
                                    checked={type === 'movie'}
                                />
                                <span>Movies only</span>
                            </label>

                            <label className="label">
                                <input
                                    name="type"
                                    type="radio"
                                    data-type="series"
                                    onChange={this.handelFilter}
                                    checked={type === 'series'}
                                />
                                <span>Series only</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
