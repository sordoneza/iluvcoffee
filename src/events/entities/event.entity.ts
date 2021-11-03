import { PrimaryGeneratedColumn, Column, Entity, Index } from 'typeorm';

// Composite index that contains Multiple columns
@Index(['name', 'type'])
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Index() //Single column index
  @Column()
  name: string;

  @Column('json')
  payload: Record<string, any>;
}
