import { AppInput } from '../components/Input';
import styles from '../styles/Login.module.css';
import Link from 'next/link';

export default function PasswordReset() {
  return (
    <div className={styles.container}>
      <div className={styles.container1}></div>

      <div className={styles.container2}>
        <div className={styles.container2__form}>
          <img src="/logo.svg" className="logo" />

          <p className="form-title" style={{ marginBottom: 30 }}>
            Forgot Password
          </p>

          <p className={styles.subtitle}>
            Please enter your registered Email address here. We will mail you a
            reset link
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

            <button className="button" style={{ marginBottom: 20 }}>
              Submit
            </button>
            <div className={styles.backRow}>
                <img src="/back_arrow.svg"/>
                <p>Go back</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
