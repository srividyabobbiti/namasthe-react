import React from "react";
import ReactDOM from "react-dom/client";

/* const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child"},
  [ React.createElement("h1", {id: "heading1"}, "Hello World from H1 hello"), 
  React.createElement("h2", {id : "heading2"}, "Hello World from H2")])
); */

//const jsxHeading = <h1 className="heading"> This is Namasthe React Js Code</h1>

const Title = () => {
  return <h1 className = "title"> This is Namste React course</h1>
};

const HeadingComponent = () => (
  <div id = "containter">
    <Title />
    <h1 className="heading"> Namaste React Functional Component</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
