const Bloglist = (preops) => {
    const blogs = props.blogs;
    const title=props.title;

    console.log(props,blogs);
    return ( 
        <div className="Blog-list"></div>
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
            <h2>{ blog.title} </h2>
            <p>Written byt { blog.author}</p>
            </div>
           ))}
    );
}
export default Bloglist;