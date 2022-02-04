import React from "react";
import Sekundomer from "./Secondomer/Secundomer/Sekundomer";
import Timer from "./Timer/Timer";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="row bg-dark text-white">
        <div className="col-6 d-flex justify-content-center align-items-center">
          <Sekundomer />
        </div>
        <div className="col-6">
          <Timer />
        </div>
      </div>
    </>
  );
}

export default App;
