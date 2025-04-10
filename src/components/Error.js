import { useRouteError } from "react-router-dom";

import React from "react";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOOOOOppppssssss!!!!!</h1>
      <h2>Something went wrong !!</h2>
      <h1>
        {err.status} : {err.statusText}
      </h1>
    </div>
  );
};

export default Error;
