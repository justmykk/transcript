import { useRouter } from 'next/router';

export const Logo = () => {
  const router = useRouter();

  return (
    <img src="/logo.svg" className="logo" onClick={() => router.push('/')} />
  );
};
