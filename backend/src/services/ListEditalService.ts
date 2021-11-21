import { getCustomRepository } from "typeorm";
import { EditaisRepositories } from "../repositories/EditaisRepositories";
import { classToPlain } from 'class-transformer';
import { Request, Response, } from "express";

export class ListEditalService {

  async execute() {
    const editaisRepositories = getCustomRepository(EditaisRepositories);

    const editais = await editaisRepositories.find();

    return classToPlain(editais);
  }

  async destroy(request: Request, response: Response) {
    const editaisRepositories = getCustomRepository(EditaisRepositories);

    const editais = await editaisRepositories.delete(request.params.id);

    return response.send();
  }
}