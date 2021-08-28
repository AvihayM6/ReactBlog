import { useState } from "react";
import  BlogList from "./BlogList";

const Home = () => {
    //Each object represent a blog
    const [blogs, setBlogs] = useState([
        {title:'New blog site1', body:'aaaaaaa', author:'Avihay', id:1},
        {title:'New blog site2', body:'bbbbbbb', author:'Noy', id:2},
        {title:'New blog site3', body:'ccccccc', author:'Maman', id:3}
    ]);
    return ( 
        <div className="home">
            <BlogList blogs = {blogs} />
        </div>
     );
}
 
export default Home;