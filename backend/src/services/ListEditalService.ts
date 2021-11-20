import { getCustomRepository } from "typeorm";
import { EditaisRepositories } from "../repositories/EditaisRepositories";
import { classToPlain } from 'class-transformer';

export class ListEditalService {

  async execute() {
    const editaisRepositories = getCustomRepository(EditaisRepositories);

    const editais = await editaisRepositories.find();

    return classToPlain(editais);
  }
}