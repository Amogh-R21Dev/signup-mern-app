import { useState } from "react";

export default function App() {
  const [mode, setMode] = useState("signup"); // "signup" or "login"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null); // set after a successful request

  const isSignup = mode === "signup";

  const switchMode = (e) => {
    e.preventDefault();
    setMode(isSignup ? "login" : "signup");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`/api/auth/${mode}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Request failed");
      setUser(data.user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setEmail("");
    setPassword("");
    setMode("login");
  };

  if (user) {
    return (
      <main className="card">
        <div className="tick" aria-hidden="true">✓</div>
        <h1>Welcome</h1>
        <p className="sub">
          You are signed in as <strong>{user.email}</strong>
        </p>
        <button className="btn" onClick={logout}>Log Out</button>
      </main>
    );
  }

  return (
    <main className="card">
      <h1>{isSignup ? "Sign Up" : "Log In"}</h1>
      <p className="sub">
        {isSignup ? "Already a member? " : "New here? "}
        <a href="#" onClick={switchMode}>{isSignup ? "Log In" : "Sign Up"}</a>
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="field">
          <input
            id="email"
            type="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="field">
          <input
            id="password"
            type="password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete={isSignup ? "new-password" : "current-password"}
          />
          <label htmlFor="password">Password</label>
        </div>

        {error && <div className="error" role="alert">{error}</div>}

        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Please wait..." : isSignup ? "Sign Up" : "Log In"}
        </button>
      </form>
    </main>
  );
}
