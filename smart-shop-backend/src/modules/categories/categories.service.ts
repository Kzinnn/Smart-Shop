import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

/**
 * Serviço responsável pelo gerenciamento de categorias
 */
@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  /**
   * Cria uma nova categoria
   * @param createCategoryDto - Dados da categoria a ser criada
   */
  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = this.categoryRepository.create(createCategoryDto);
    return await this.categoryRepository.save(category);
  }

  /**
   * Busca todas as categorias
   * @param parentId - ID da categoria pai (opcional)
   */
  async findAll(parentId?: string): Promise<Category[]> {
    return await this.categoryRepository.find({
      where: { parentId },
      relations: ['products'],
    });
  }

  /**
   * Busca uma categoria pelo ID
   * @param id - ID da categoria
   */
  async findOne(id: string): Promise<Category> {
    const category = await this.categoryRepository.findOne({
      where: { id },
      relations: ['products'],
    });
    
    if (!category) {
      throw new NotFoundException(`Categoria com ID ${id} não encontrada`);
    }
    
    return category;
  }

  /**
   * Atualiza uma categoria
   * @param id - ID da categoria
   * @param updateCategoryDto - Dados a serem atualizados
   */
  async update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    const category = await this.findOne(id);
    Object.assign(category, updateCategoryDto);
    return await this.categoryRepository.save(category);
  }

  /**
   * Remove uma categoria
   * @param id - ID da categoria
   */
  async remove(id: string): Promise<void> {
    const result = await this.categoryRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Categoria com ID ${id} não encontrada`);
    }
  }
}
