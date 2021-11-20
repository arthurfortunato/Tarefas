import { Request, Response } from "express";
import { CreateEditalService } from "../services/CreateEditalService";


export class CreateEditalController {

  async handle(request: Request, response: Response) {

    const { edital, processo, ano } = request.body;

    const createEditalService = new CreateEditalService();

    const editais = await createEditalService.execute({ edital, processo, ano });

    return response.json(editais);
  }
}