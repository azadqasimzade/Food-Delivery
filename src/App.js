import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [location]);
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
