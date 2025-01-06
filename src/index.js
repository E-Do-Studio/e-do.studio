import checkEnvironmentVariables from "./utils/envCheck";

try {
  checkEnvironmentVariables();
} catch (error) {
  console.error("Environment configuration error:", error);
}
