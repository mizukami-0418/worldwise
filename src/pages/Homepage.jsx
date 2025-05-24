import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>世界紀行</h1>
      <Link to="/app">アプリへGO👉</Link>
    </div>
  );
}

export default Homepage;
