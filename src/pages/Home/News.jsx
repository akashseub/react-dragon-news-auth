import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";


const News = () => {

    const [news, setNews] = useState([])

    useEffect(()=> {
        fetch('news.json')
            .then(res=>res.json())
            .then(data=>setNews(data))
    })

    return (
        <div>
            <h2 className="text-xl font-bold">Dragon News Home</h2>

            {
                news.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default News;