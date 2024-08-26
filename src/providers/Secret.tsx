import SECRET from "@/constants/secrets";

interface SecretValidationProps {
  children: React.ReactNode;
}

const SecretValidationProvider: React.FC<SecretValidationProps> = (props) => {
  try {
    validateVars();
  } catch (error: any) {
    console.error(error.message);
    // Optionally exit the app if validation fails
    throw error; // This will halt the application
  }
  const { children } = props;
  return <>{children}</>;
};

const validateVars = () => {
  const requiredVars = Object.keys(SECRET);

  requiredVars.forEach((key) => {
    if (!import.meta.env[key]) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
  });
};

export default SecretValidationProvider;
