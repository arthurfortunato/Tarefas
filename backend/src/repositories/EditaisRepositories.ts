import { EntityRepository, Repository } from 'typeorm';
import { Edital } from '../entities/Edital';

@EntityRepository(Edital)
export class EditaisRepositories extends Repository<Edital> {

}