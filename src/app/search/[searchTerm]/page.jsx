import ListOfCards from "@/components/ListOfCards";
import React from "react";

const searchPage = async ({ params }) => {
  const search = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=b5e44d486f7809e636f2abafd3108339&query=${search}`
  );
  const data = await res.json();
  console.log(data);
  return (
    <div>
      {data.results.length === 0 ? (
        <div className="text-center">No Search Found</div>
      ) : (
        <ListOfCards data={data} />
      )}
    </div>
  );
};

export default searchPage;
