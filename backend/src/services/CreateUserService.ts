import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

import { hash } from 'bcryptjs';

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

export class CreateUserService {

  async execute({ name, email, admin = false, password }: IUserRequest) {
    const userRepository = getCustomRepository(UsersRepositories);

    if (!name) {
      throw new Error("Incorrect name");
    }

    if (!email) {
      throw new Error("Incorrect e-mail!");
    }
    const userAlreadyExists = await userRepository.findOne({
      email
    });

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    if (!password) {
      throw new Error("Incorrect password!")
    }

    const passwordHash = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    });

    await userRepository.save(user);

    return user;
  }
}