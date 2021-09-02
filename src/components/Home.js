import useFetch from "../useFetch";
import  BlogList from "./BlogList";

const Home = () => {
    const {data, isPending, error} = useFetch('http://localhost:8200/blogs');
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading</div>}
            {/* The '&&' sign checked if the blogs is null. if yes, don't run the Bloglist component, otherwise yes. */}
            {data && <BlogList blogs = {data} title="All Blogs"/>} 
        </div>
     );
}
 
export default Home;