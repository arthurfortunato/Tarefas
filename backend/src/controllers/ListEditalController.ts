import { Request, Response } from "express";
import { ListEditalService } from "../services/ListEditalService";

export class ListEditalController {

  async handle(request: Request, response: Response) {

    const listEditaisService = new ListEditalService();

    const editais = await listEditaisService.execute();

    return response.json(editais);
  }
}