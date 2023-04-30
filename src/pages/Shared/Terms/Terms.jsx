import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h1>Terms and Condition</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        maiores nemo recusandae commodi hic quod, sit dignissimos, quibusdam
        soluta quae ipsum? Tempora error at excepturi iste eos impedit!
        Necessitatibus, eligendi.
      </p>
      <p>
        Go back to <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Terms;
