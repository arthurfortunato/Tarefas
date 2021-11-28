import { getCustomRepository } from "typeorm";
import { EditaisRepositories } from "../repositories/EditaisRepositories";

interface IEtapaRequest {
  edital: string;
  processo: string;
  ano: string;
}

export class CreateEtapaService {

  async execute({ edital, processo, ano }: IEditalRequest) {
    const editalRepository = getCustomRepository(EditaisRepositories);

    if (!edital) {
      throw new Error("Incorrect edital");
    }

    if (!processo) {
      throw new Error("Incorrect process!");
    }
    const editalAlreadyExists = await editalRepository.findOne({
      processo
    });

    if (editalAlreadyExists) {
      throw new Error("Edital already exists!");
    }

    if (!ano) {
      throw new Error("Incorrect year!")
    }


    const editais = editalRepository.create({
      edital,
      processo,
      ano,
    });

    await editalRepository.save(editais);

    return editais;
  }
}