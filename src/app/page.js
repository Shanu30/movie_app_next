import Card from "@/components/Card";
async function getData(genre) {
  const res = await fetch(
    genre === "fetchTopRated"
      ? "https://api.themoviedb.org/3/movie/top_rated?api_key=b5e44d486f7809e636f2abafd3108339&language=en-US&page=1"
      : "https://api.themoviedb.org/3//trending/all/week?api_key=b5e44d486f7809e636f2abafd3108339&language=en-US&page=1"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const data = await getData(genre);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 py-4 w w-full max-w-6xl m-auto">
      {data.results.map((item) => {
        return <Card key={item.id} result={item} />;
      })}
    </div>
  );
}
