import React from "react";
import Card from "./Card";

const ListOfCards = ({ data }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 py-4 w w-full max-w-6xl m-auto">
      {data.results.map((item) => {
        return <Card key={item.id} result={item} />;
      })}
    </div>
  );
};

export default ListOfCards;
