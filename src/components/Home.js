import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <h1>Thats the home page</h1>
      <h2>
        This challenge is created to learn creating custom hooks and reuse it in
        other components
      </h2>
      <h3> The custom hook that's created, is in the useApi.js file</h3>
      <h4>
        Note that the resource will not be really updated on the server but it
        will be faked as if
      </h4>
    </div>
  );
}

export default Home;
