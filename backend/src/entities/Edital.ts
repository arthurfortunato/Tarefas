import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn
} from "typeorm";

import { v4 as uuid } from 'uuid';

@Entity("editais")
export class Edital {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  edital: string;

  @Column()
  processo: string;

  @Column()
  ano: string;

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
