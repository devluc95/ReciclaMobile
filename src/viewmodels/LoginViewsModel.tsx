import { useState } from "react";

export function useLoginViewModel() {
  const [user, setUser] = useState({ matricula: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const setMatricula = (matricula) => setUser((prev) => ({ ...prev, matricula }));
  const setPassword = (password) => setUser((prev) => ({ ...prev, password }));

  const handleLogin = () => {
    setLoading(true);
    setError("");

    // Simulando login com delay
    setTimeout(() => {
      setLoading(false);
      if (user.matricula === "999999-0" && user.password === "123456") {
        alert("Login bem-sucedido!");
      } else {
        setError("Matrícula ou senha incorretos");
      }
    }, 1500);
  };

  const handleForgotPassword = () => {
    alert("Função de recuperação de senha!");
  };

  return { user, setMatricula, setPassword, loading, error, handleLogin, handleForgotPassword };
}
