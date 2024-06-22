import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main>
      <h3>Page not found</h3>
      <Link to="/">Go to Home page</Link>
    </main>
  );
};

export default ErrorPage;
