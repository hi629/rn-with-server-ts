import { IsBoolean } from 'class-validator';

export class MemoDTO {
  todo: string;
  title: string;

  @IsBoolean()
  highPriority: boolean;
}
