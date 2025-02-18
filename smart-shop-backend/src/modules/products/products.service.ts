import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

/**
 * Serviço responsável pelo gerenciamento de produtos
 * Fornece métodos para criar, buscar, atualizar e remover produtos
 */
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  /**
   * Cria um novo produto
   * @param createProductDto - Dados do produto a ser criado
   */
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create(createProductDto);
    return await this.productRepository.save(product);
  }

  /**
   * Busca produtos com filtros opcionais
   * @param options - Opções de filtro (categoria, tags, termo de busca)
   */
  async findAll(options?: { category?: string; tags?: string[]; search?: string }) {
    const queryBuilder = this.productRepository.createQueryBuilder('product');
    
    // Filtra por categoria
    if (options?.category) {
      queryBuilder.andWhere('product.category = :category', { category: options.category });
    }
    
    // Filtra por tags
    if (options?.tags?.length) {
      queryBuilder.andWhere('product.tags @> :tags', { tags: options.tags });
    }
    
    // Busca por nome ou descrição
    if (options?.search) {
      queryBuilder.andWhere(
        '(product.name ILIKE :search OR product.description ILIKE :search)',
        { search: `%${options.search}%` }
      );
    }
    
    return await queryBuilder.getMany();
  }

  /**
   * Busca um produto pelo ID
   * @param id - ID do produto
   * @throws NotFoundException - Se o produto não for encontrado
   */
  async findOne(id: string): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
    return product;
  }

  /**
   * Atualiza um produto existente
   * @param id - ID do produto
   * @param updateProductDto - Dados a serem atualizados
   */
  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.findOne(id);
    Object.assign(product, updateProductDto);
    return await this.productRepository.save(product);
  }

  /**
   * Remove um produto
   * @param id - ID do produto
   * @throws NotFoundException - Se o produto não for encontrado
   */
  async remove(id: string): Promise<void> {
    const result = await this.productRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
  }

  /**
   * Atualiza o estoque de um produto
   * @param id - ID do produto
   * @param quantity - Quantidade a ser adicionada (ou subtraída se negativo)
   * @throws Error - Se o estoque ficar negativo
   */
  async updateStock(id: string, quantity: number): Promise<Product> {
    const product = await this.findOne(id);
    product.stockQuantity += quantity;
    if (product.stockQuantity < 0) {
      throw new Error('A quantidade em estoque não pode ser negativa');
    }
    return await this.productRepository.save(product);
  }
}
