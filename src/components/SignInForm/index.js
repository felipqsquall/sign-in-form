import { useState } from "react";

import { signIn } from "../../services/api";

import "./styles.css";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    //TODO: simular uma API
    try {
      await signIn({ username, password });
      setIsSignedIn(true);
      setError("");
      setUsername("");
      setPassword("");
    } catch (error) {
      setError("Usuário ou senha inválidos.");
    }

    setIsLoading(false);
  };

  return (
    <main>
      {isSignedIn ? (
        <>
          <h1>Olá, {username} </h1>
          <button onClick={() => setIsSignedIn(false)}>Sair</button>
        </>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <h1>Autenticação</h1>

          {error && <p className="error">{error}</p>}

          <label>
            <p>Nome de usuário</p>
            <input
              type="text"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
          </label>

          <label>
            <p>Senha</p>
            <input
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </label>

          <footer>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Autenticado..." : "Entrar"}
            </button>
          </footer>
        </form>
      )}
    </main>
  );
};

export default SignInForm;
