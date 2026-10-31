import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>404</h1>
      <p>Page not found</p>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default NotFound;
