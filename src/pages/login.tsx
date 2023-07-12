import { signIn } from 'next-auth/react';

const LoginPage = () => {
  const handleLogin = async () => {
    const result = await signIn('google');
    // Você pode adicionar lógica adicional aqui para autenticação MFA
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login com o Google</button>
    </div>
  );
};

export default LoginPage;
