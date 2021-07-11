import { Injectable } from '@nestjs/common';
import { Memo } from 'src/entities/memo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { MemoDTO } from './dto';
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
  async create(memo: MemoDTO): Promise<InsertResult> {
    return await this.memoRepository.insert(memo);
  }
  async show(id: number): Promise<Memo | null> {
    return await this.memoRepository.findOne({ id: id });
  }
  async update(id: number, memo: MemoDTO): Promise<UpdateResult> {
    return await this.memoRepository.update(id, memo);
  }

  async delete(id: number): Promise<DeleteResult> {
    const targetItem = await this.show(id);
    if (!targetItem) {
      return Promise.reject(new Error('memo not found.'));
    }
    return await this.memoRepository.delete(id);
  }
}
