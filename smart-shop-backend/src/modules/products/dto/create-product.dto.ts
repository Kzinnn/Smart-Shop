import { IsString, IsNumber, IsOptional, IsArray, IsUUID, Min, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  stockQuantity: number;

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsOptional()
  images?: string[];

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsOptional()
  tags?: string[];

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @ApiProperty()
  @IsOptional()
  specifications?: Record<string, any>;

  @ApiProperty()
  @IsUUID()
  categoryId: string;
}
