import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUserServices";

export class ListUserController {

  async handle(request: Request, response: Response) {

    const listUsersService = new ListUsersService();

    const user = await listUsersService.execute();

    return response.json(user);
  }
}