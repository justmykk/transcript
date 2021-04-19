import { AppInput } from '../components/Input';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router';
import { FormEvent } from 'react';
import { Logo } from '../components/Logo';
import { noAuth } from '../hocs/noAuth';

const PasswordReset = noAuth(() => {
  const router = useRouter();

  function submitForm(ev: FormEvent) {
    ev.preventDefault();
    router.push('/new-password');
  }

  return (
    <div className={styles.container}>
      <div className={styles.container1}></div>

      <div className={styles.container2}>
        <div className={styles.container2__form}>
          <Logo />

          <p className="form-title" style={{ marginBottom: 30 }}>
            Forgot Password
          </p>

          <p className={styles.subtitle}>
            Please enter your registered Email address here. We will mail you a
            reset link
          </p>

          <form style={{ width: '100%' }} onSubmit={submitForm}>
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
            <div className={styles.backRow} onClick={() => router.back()}>
              <img src="/back_arrow.svg" style={{ marginRight: 10 }} />
              <p>Go back</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

export default PasswordReset;
