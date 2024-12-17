const checkEnvironmentVariables = () => {
  const requiredVars = ["REACT_APP_STRAPI_URL"];

  const missingVars = requiredVars.filter((varName) => !process.env[varName]);

  if (missingVars.length > 0) {
    console.error("Missing required environment variables:", missingVars);
    throw new Error(
      `Missing required environment variables: ${missingVars.join(", ")}`
    );
  }

  // Vérifier que l'URL de Strapi est valide
  try {
    new URL(process.env.REACT_APP_STRAPI_URL);
  } catch (e) {
    console.error("Invalid STRAPI_URL:", process.env.REACT_APP_STRAPI_URL);
    throw new Error("Invalid STRAPI_URL configuration");
  }
};

export default checkEnvironmentVariables;
