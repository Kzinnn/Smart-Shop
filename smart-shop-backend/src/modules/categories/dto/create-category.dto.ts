import { IsString, IsOptional, IsUUID, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ description: 'Nome da categoria' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Descrição da categoria', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'ID da categoria pai', required: false })
  @IsUUID()
  @IsOptional()
  parentId?: string;

  @ApiProperty({ description: 'Indica se a categoria está ativa', default: true })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
