export interface EmailFormProps {
  userEmail: string;
  emailError: string;
  handleEmailSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setUserEmail: (email: string) => void;
  setEmailError: (error: string) => void;
}
