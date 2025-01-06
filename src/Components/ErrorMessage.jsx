const ErrorMessage = ({ error }) => {
  return (
    <div
      className="error-container"
      style={{
        padding: "20px",
        margin: "20px",
        backgroundColor: "#fff3f3",
        border: "1px solid #ffcdd2",
        borderRadius: "4px",
        color: "#b71c1c",
      }}
    >
      <h3>Une erreur est survenue</h3>
      <p>{error}</p>
      <p>Veuillez réessayer plus tard ou contacter l'administrateur.</p>
    </div>
  );
};

export default ErrorMessage;
