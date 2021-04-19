import { AppInput } from '../components/Input';
import styles from '../styles/Login.module.css';
import Link from 'next/link';
import { Logo } from '../components/Logo';
import { FormEvent, useState } from 'react';
import { RegistrationModel } from '../models/registration-model';
import { registerService } from '../services/register';
import { useRouter } from 'next/router';
import { noAuth } from '../hocs/noAuth';

const Register = noAuth(() => {
  const [user, setUser] = useState<RegistrationModel>(new RegistrationModel());
  const [confirmPass, setConfirmPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>(null);
  const [hidePass, setHidePass] = useState(true);
  const [hideConfirmPass, setHideConfirmPass] = useState(true);

  const router = useRouter();

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null);

    if (user.password !== confirmPass) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    const notValid = await registerService.createUser(user);
    setLoading(false);

    notValid ? setError(notValid) : router.push('/dashboard');
  };

  return (
    <div className={styles.container}>
      <div className={styles.container1}></div>

      <div className={styles.container2}>
        <div className={styles.container2__form}>
          <Logo />

          <p className="form-title" style={{ marginBottom: 30 }}>
            Sign up
          </p>

          <form style={{ width: '100%' }} onSubmit={onSubmit}>
            <div className={styles.nameRow}>
              <AppInput
                placeholder="First Name"
                onChange={(firstName) => setUser({ ...user, firstName })}
                value={user.firstName}
                required
              />
              <div style={{ width: 50 }} />
              <AppInput
                placeholder="Last Name"
                onChange={(lastName) => setUser({ ...user, lastName })}
                value={user.lastName}
                required
              />
            </div>
            <AppInput
              placeholder="D.O.B (Optional)"
              onChange={(dateOfBirth) => setUser({ ...user, dateOfBirth })}
              value={user.dateOfBirth}
              inputType="date"
            />

            <AppInput
              placeholder="Email"
              onChange={(email) => setUser({ ...user, email })}
              value={user.email}
              inputType="email"
              required
            />

            <AppInput
              placeholder="Mobile Number"
              onChange={(mobileNumber) => setUser({ ...user, mobileNumber })}
              value={user.mobileNumber}
              inputType="tel"
              required
            />

            <AppInput
              placeholder="Password"
              onChange={(password) => setUser({ ...user, password })}
              value={user.password}
              inputType={hidePass ? 'password' : 'text'}
              icon={hidePass ? 'hide' : 'eye'}
              onTogglePassword={() => setHidePass((val) => !val)}
              required
            />

            <AppInput
              placeholder="Confirm Password"
              onChange={setConfirmPass}
              value={confirmPass}
              inputType={hideConfirmPass ? 'password' : 'text'}
              icon={hideConfirmPass ? 'hide' : 'eye'}
              onTogglePassword={() => setHideConfirmPass((val) => !val)}
              required
            />

            <p className="error-message">{error}</p>

            <button
              className="button"
              disabled={loading}
              style={{ marginBottom: 50 }}
            >
              {loading ? 'Loading...' : 'Sign Up'}
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
});

export default Register;
