import React from "react";

const page = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      <h1 className="text-4xl">
        this is catch all routes page {params.productId}
      </h1>
    </div>
  );
};

export default page;
