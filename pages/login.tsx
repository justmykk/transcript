import { AppInput } from '../components/Input';
import styles from '../styles/Login.module.css';
import Link from 'next/link';
import { Logo } from '../components/Logo';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { authService } from '../services/auth';

export default function Login() {
  const [error, setError] = useState<string>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null);

    setLoading(true);
    const message = await authService.login(username, password);
    setLoading(false);

    message ? setError(message) : router.push('/dashboard');
  };

  return (
    <div className={styles.container}>
      <div className={styles.container1}></div>

      <div className={styles.container2}>
        <div className={styles.container2__form}>
          <Logo />

          <p className="form-title" style={{ marginBottom: 50 }}>
            Welcome Back
          </p>

          <form style={{ width: '100%' }} onSubmit={onSubmit}>
            <AppInput
              placeholder="Email"
              onChange={setUsername}
              value={username}
              inputType="email"
              icon="mail"
              containerStyle={{ marginBottom: 30 }}
              required
            />

            <AppInput
              placeholder="Password"
              onChange={setPassword}
              value={password}
              inputType="password"
              icon="eye"
              containerStyle={{ marginBottom: 30 }}
              required
            />

            <p className="error-message">{error}</p>

            <button
              type="submit"
              className="button"
              style={{ marginBottom: 20 }}
              disabled={loading}
            >
              Sign In
            </button>
          </form>

          <div className={styles.row}>
            <p>Remember Me</p>
            <Link href="/password-reset">
              <a>Forgot Password?</a>
            </Link>
          </div>

          <p className={styles.newAccount}>
            Don't have an account yet?{' '}
            <Link href="/register">
              <a>Sign up now</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
