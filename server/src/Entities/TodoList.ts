import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TodoList extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  info!: string;
}
