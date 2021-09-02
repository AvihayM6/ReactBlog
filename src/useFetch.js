import { useState, useEffect } from "react";

const useFetch = (url ) => {
        //Each object represent a blog
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(res.ok === false){
                    throw Error('Could not fetch the data');
                }
                return res.json();})
            .then((data) => {
                setData(data);
                
                setIsPending(false);})
            .catch((err) => {
                if(err.name === 'AbortError'){
                    console.log('Fetch aborted');
                }
                else{
                setIsPending(false);
                setError(err.message);
                setError(null);
                }
            })
        return () => abortCont.abort();
        },[url]);
        return {data, isPending, error}
}
 
export default useFetch;
