import { AppInput } from '../components/Input';
import styles from '../styles/Login.module.css';
import Link from 'next/link';

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.container1}></div>

      <div className={styles.container2}>
        <div className={styles.container2__form}>
          <img src="/logo.svg" className="logo" />

          <p className="form-title" style={{ marginBottom: 50 }}>
            Welcome Back
          </p>

          <form style={{ width: '100%' }}>
            <AppInput
              placeholder="Email"
              onChange={(val) => console.log(val)}
              value=""
              inputType="email"
              icon="mail"
              containerStyle={{ marginBottom: 30 }}
            />

            <AppInput
              placeholder="Password"
              onChange={(val) => console.log(val)}
              value=""
              inputType="password"
              icon="eye"
              containerStyle={{ marginBottom: 30 }}
            />

            <button className="button" style={{ marginBottom: 20 }}>
              Sign In
            </button>
          </form>

          <div className={styles.row} style={{marginBottom: 100}}>
            <p>Remember Me</p>
            <Link href="/password-reset"><a>Forgot Password?</a></Link>
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
