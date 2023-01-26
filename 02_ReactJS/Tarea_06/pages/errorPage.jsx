import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  // const error = useRouteError();
  const navigate = useNavigate();

  return (
    <section id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
      <button onClick={() => navigate('/home')}>Go to Home</button>
    </section>
  );
}

export default ErrorPage;