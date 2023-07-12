import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const options = {
  providers: [
    GoogleProvider({
      clientId: '575078417525-lb7l0mk5t9ui8sppt2g5pnaheqiu5ksf.apps.googleusercontent.com', //meu ClientId
      clientSecret: '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', //meu clientSecret 
    }),
    // Outros provedores podem ser adicionados aqui, como provedor MFA
  ],
  // Configurações adicionais podem ser adicionadas aqui, como banco de dados
};

export default NextAuth(options);
