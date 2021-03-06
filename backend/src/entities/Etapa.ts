import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn
} from "typeorm";

import { v4 as uuid } from 'uuid';

@Entity()
export class Etapa {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  numero: string;

  @Column()
  etapa: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}
