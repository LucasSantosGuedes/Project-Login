import { signIn } from 'next-auth/react';

const SignupPage = () => {
  const handleSignup = () => {
    signIn('google');
    // Você pode adicionar lógica adicional aqui para autenticação MFA
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <button onClick={handleSignup}>Cadastro com o Google</button>
    </div>
  );
};

export default SignupPage;
