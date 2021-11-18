import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {

  //Receber o token
  const authToken = request.headers.authorization;

  //Validar se token está preenchido
  if (!authToken) {
    return response.status(401).json({
      errorCode: "token.invalid",
    });
  }

  const [, token] = authToken.split(" ")

  try {
    //Validar se token é válido
    const { sub } = verify(token, "1df01c2f0dbd2bde92cb8b93e74244c3") as IPayload;

    //Recuperar informações do usuário
    request.user_id = sub;

    return next();

  } catch (error) {
    return response.status(401).json({ errorCode: "token.expired" });
  }

}