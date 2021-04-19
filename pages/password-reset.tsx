import { AppInput } from '../components/Input';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { Logo } from '../components/Logo';
import { noAuth } from '../hocs/noAuth';
import { resetService } from '../services/reset';

const PasswordReset = noAuth(() => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  const submitForm = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null);

    setLoading(true);
    const isError = await resetService.initReset(username);
    setLoading(false);

    isError ? setError(isError) : router.push('/new-password');
  };

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
              onChange={setUsername}
              value={username}
              inputType="email"
              icon="mail"
              required
              containerStyle={{ marginBottom: 30 }}
            />

            <p className="error-message">{error}</p>

            <button
              disabled={loading}
              className="button"
              style={{ marginBottom: 20 }}
            >
              {loading ? 'Submitting...' : 'Submit'}
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
