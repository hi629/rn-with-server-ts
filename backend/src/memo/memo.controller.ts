import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Memo } from 'src/entities/memo.entity';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { MemoDTO } from './dto';
import { MemoService } from './memo.service';

@Controller('memo')
export class MemoController {
  constructor(private readonly service: MemoService) {}

  @Get()
  async list(): Promise<Memo[]> {
    return await this.service.list();
  }

  @Post()
  async create(@Body() memo: MemoDTO): Promise<InsertResult> {
    return await this.service.create(memo);
  }

  @Get(':id')
  async getMemo(@Param('id') id: string): Promise<Memo> {
    return await this.service.show(Number(id));
  }

  @Put(':id/update')
    async update(@Param('id') id: string, @Body() newMemo: MemoDTO): Promise<UpdateResult> {
      const currentMemo = await this.service.show(Number(id))
      const updatedMemo: MemoDTO = {...currentMemo, ...newMemo}
    return await this.service.update(Number(id), updatedMemo)
  }

  @Delete(":id/delete")
  async delete(
    @Param("id") id: string): Promise<DeleteResult>{
      return await this.service.delete(Number(id));
    }
  )
}
