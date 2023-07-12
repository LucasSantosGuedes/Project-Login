import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const authMiddleware: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  // Exemplo de verificação de autenticação básica
  const isAuthenticated = true;
  if (!isAuthenticated) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Se a autenticação for bem-sucedida, você pode retornar a resposta ou chamar a função `next()`
  return res.status(200).json({ message: 'Autenticado com sucesso' });
};

export default authMiddleware;
