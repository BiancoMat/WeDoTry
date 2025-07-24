import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // qui potremmo reindirizzare alla home o dashboard in futuro
      alert('Login effettuato!');
    } catch (err) {
      setError('Email o password errati');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>WeDo</h1>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button style={{ marginTop: '1rem' }} type="submit">Login</button>
      </form>
      <p style={{ marginTop: '1rem' }}>
        Non hai un account? <a href="/register">Registrati</a>
      </p>
    </div>
  );
}

export default Login;
