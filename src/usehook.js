import { useState, useEffect} from 'react';
import  BlogList from './BlogList';

const Home = () => {
    const [blogs,setBlogs]=useState([
        {title:'my new website', body:'lorem ipsum...', author:'mario',id:1}
    ]);
    const handleDelete=(id) => {
        const newBlogs = blogs.filter(blog.filter(blog => blog.id!==id));
        setBlogs(newBlogs);
    }
      useEffect  () => {
        console.log('use effect ran')
      };

    return (
        <div className="home">
            <Bloglist blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            </div>
            
            
    
    );
}

export default Home;