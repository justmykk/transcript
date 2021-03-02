import { AppInput } from '../components/Input';
import styles from '../styles/Login.module.css';
import Link from 'next/link';
import { Logo } from '../components/Logo';

export default function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.container1}></div>

      <div className={styles.container2}>
        <div className={styles.container2__form}>
          <Logo />

          <p className="form-title" style={{ marginBottom: 30 }}>
            Sign up
          </p>

          <form style={{ width: '100%' }}>
            <div className={styles.nameRow}>
              <AppInput
                placeholder="First Name"
                onChange={(val) => console.log(val)}
                value=""
              />
              <div style={{ width: 50 }} />
              <AppInput
                placeholder="Last Name"
                onChange={(val) => console.log(val)}
                value=""
              />
            </div>
            <AppInput
              placeholder="D.O.B (Optional)"
              onChange={(val) => console.log(val)}
              value=""
              inputType="date"
            />

            <AppInput
              placeholder="Email"
              onChange={(val) => console.log(val)}
              value=""
              inputType="email"
            />

            <AppInput
              placeholder="Mobile Number"
              onChange={(val) => console.log(val)}
              value=""
              inputType="tel"
            />

            <AppInput
              placeholder="Password"
              onChange={(val) => console.log(val)}
              value=""
              inputType="password"
              icon="eye"
            />

            <AppInput
              placeholder="Confirm Password"
              onChange={(val) => console.log(val)}
              value=""
              inputType="password"
              icon="hide"
            />

            <button className="button" style={{ marginBottom: 50 }}>
              Sign Up
            </button>
          </form>

          <p className={styles.newAccount}>
            Already have an account?{' '}
            <Link href="/login">
              <a>Sign In</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
