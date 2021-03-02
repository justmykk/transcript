import { AppInput } from '../components/Input';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router';
import { Logo } from '../components/Logo';

export default function NewPassword() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.container1}></div>

      <div className={styles.container2}>
        <div className={styles.container2__form}>
          <Logo/>

          <p className="form-title" style={{ marginBottom: 30 }}>
            Enter New Password
          </p>

          <p className={styles.subtitle}>
            Please enter your new password and comfirm your new password to
            reset your password.
          </p>

          <form style={{ width: '100%' }}>
            <AppInput
              placeholder="New Password"
              onChange={(val) => console.log(val)}
              value=""
              inputType="password"
              icon="eye"
              containerStyle={{ marginBottom: 30 }}
            />

            <AppInput
              placeholder="Confirm New Password"
              onChange={(val) => console.log(val)}
              value=""
              inputType="password"
              icon="eye"
              containerStyle={{ marginBottom: 30 }}
            />

            <button className="button" style={{ marginBottom: 20 }}>
              Submit
            </button>
            <div className={styles.backRow} onClick={() => router.push('/login')}>
              <img src="/back_arrow.svg" style={{ marginRight: 10 }} />
              <p>Go back to Sign in</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
