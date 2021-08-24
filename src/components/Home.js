import '../style/Home.css';
import { useState } from "react";

const Home = () => {
    //Each object represent a blog
    const [blogs, setBlogs] = useState([
        {title:'New blog site1', body:'aaaaaaa', author:'Avihay', id:1},
        {title:'New blog site2', body:'bbbbbbb', author:'Noy', id:2},
        {title:'New blog site3', body:'ccccccc', author:'Maman', id:3}
    ]);
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Writen by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;