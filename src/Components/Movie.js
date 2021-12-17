const Movie = (props) => {
    const {Title, Year, imdbID: id, Type, Poster} = props;

    return (
        
        <div className="card movie" id={id}>
            <div className="card-image waves-effect waves-block waves-light">
                {
                    Poster === 'N/A' ? 
                                <img className="activator" src={`https://via.placeholder.com/300x400?text=${Title}`}/> 
                                : 
                                <img className="activator" src={Poster}/>
                }
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{Title}</span>
                <p>{Year} <span className="right">{Type}</span></p>
            </div>
        </div>
    )

}

export default Movie;