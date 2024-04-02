import React from "react";

const Meeting = ({ params }: { params: { id: string } }) => {
  console.log(params);
  return (
    <div>
      <h1>Meeting {params.id}</h1>
      <p>Meeting details</p>
    </div>
  );
};

export default Meeting;
