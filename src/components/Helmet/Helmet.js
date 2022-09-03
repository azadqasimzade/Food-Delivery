import React from "react";

function Helmet({ title, children }) {
  document.title = "Food ordering app - " + title;
  return <div className="w-full">{children}</div>;
}

export default Helmet;
