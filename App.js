const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child"},
  [ React.createElement("h1", {id: "heading1"}, "Hello World from H1"), 
  React.createElement("h2", {id : "heading2"}, "Hello World from H2")])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
