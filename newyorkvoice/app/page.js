'use client'
import { useEffect, useState } from "react";
import Article from "./components/Article";
import { supabase } from "@/lib/client";

export default function Home(props) {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const getArticles = async () => {
      const {data} = await supabase
      .from("Articles")
      .select()
      .order('created_at', {ascending:false})
      setArticles(data)
    }
    getArticles()
  }, [props])

  return (
    <div className="text-4xl text-black font-bold p-6">
      <Article headline="test article" imgUrl="" body="this is some body text" link=""/>
      { articles && articles.length > 0 ? (
        articles.map((a) => {
          return (
            <Article 
            imageUrl={a.image_url}
            headline={a.headline}
            body={a.body}
            id={a.id}
            />
          )
        })
      ) : (<h2>No Articles Yet</h2>)}

    </div>
  );
}
