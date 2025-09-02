import { useState } from "react";

export function useLoginViewModel() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const setEmail = (email) => setUser((prev) => ({ ...prev, email }));
  const setPassword = (password) => setUser((prev) => ({ ...prev, password }));

  const handleLogin = () => {
    setLoading(true);
    setError("");

    // Simulando login com delay
    setTimeout(() => {
      setLoading(false);
      if (user.email === "teste@email.com" && user.password === "123456") {
        alert("Login bem-sucedido!");
      } else {
        setError("Email ou senha incorretos");
      }
    }, 1500);
  };

  const handleForgotPassword = () => {
    alert("Função de recuperação de senha!");
  };

  return { user, setEmail, setPassword, loading, error, handleLogin, handleForgotPassword };
}