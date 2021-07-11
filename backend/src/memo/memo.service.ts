import { Injectable } from '@nestjs/common';
import { Memo } from 'src/entities/memo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult, UpdateResult, DeleteResult } from 'typeorm';
// serviceでDBテーブルとのやりとりを行う
@Injectable()
export class MemoService {
  constructor(
    @InjectRepository(Memo)
    private readonly memoRepository: Repository<Memo>,
  ) {}

  async list(): Promise<Memo[]> {
    return await this.memoRepository.find();
  }
  async create(memo: {
    title: string;
    todo: string;
    highPriority: boolean;
  }): Promise<InsertResult> {
    return await this.memoRepository.insert(memo);
  }
  async show(id: number): Promise<Memo | null> {
    return await this.memoRepository.findOne({ id: id });
  }
  async update(id: number, memo): Promise<UpdateResult> {
    return await this.memoRepository.update(id, memo);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.memoRepository.delete(id);
  }
}
