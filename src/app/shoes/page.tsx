import React from "react";

type TShoe = {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
};

const page = async () => {
  const res = await fetch("http://localhost:3004/shoes");
  const shoes = await res.json();
  console.log("response from shoes", shoes);

  return (
    <div>
      {shoes.map((shoe: TShoe) => (
        <h1 key={shoe.id}>{shoe?.title}</h1>
      ))}
    </div>
  );
};

export default page;
