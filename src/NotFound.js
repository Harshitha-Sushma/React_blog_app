const NotFound = () => {
    return(
        <div className="Not-Found">
            <h2> Sorry</h2>
            <p>that page cannot be found</p>
            <Link to ="/">Back tothe homepage...</Link>
        </div>
    );
}

export default NotFound;