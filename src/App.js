import PullReqTable from "./Components/PullReqTable/PullReqTable";
import Header from "./Components/Header/Header";
import React from "react";

function App() {
  return (
    <div
      style={{
        width: "auto",
        margin: "20px 15%",
        backgroundColor: "rgba(255, 255, 255, 0.800)",
        padding: "10vh",
        paddingTop: "3vh",
        borderRadius: "48% 54% 43% 37% / 29% 46% 44% 59% ",
      }}
    >
      <Header />
      <PullReqTable />
    </div>
  );
}

export default App;
