// Entity...テーブル構造をクラス構文で表現。constructorはいらない。
// railsでいうところのActiveRecord
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Memo {
  // 以下のデコレータをつけると自動的に増える主キーのカラムになる
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  todo: string;

  @Column()
  title: string;

  // 以下のように記述すればテーブルのoptionをつけることが可能
  @Column('boolean', { default: false })
  highPriority: boolean;

  // created_atになる
  @CreateDateColumn()
  readonly createdAt?: Date;

  // updated_atになる
  @UpdateDateColumn()
  readonly updatedAt?: Date;
}
