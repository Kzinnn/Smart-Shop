import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';

/**
 * Entidade Product - Representa um produto no sistema
 * Esta entidade armazena todas as informações relacionadas a um produto no e-commerce
 */
@Entity('products')
export class Product {
  // Identificador único do produto usando UUID
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Nome do produto
  @Column()
  name: string;

  // Descrição detalhada do produto
  @Column('text')
  description: string;

  // Preço do produto com precisão de 10 dígitos e 2 casas decimais
  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  // Quantidade disponível em estoque
  @Column('int')
  stockQuantity: number;

  // Array de URLs das imagens do produto
  @Column('text', { array: true, default: [] })
  images: string[];

  // Tags para categorização e busca
  @Column('text', { array: true, default: [] })
  tags: string[];

  // Indica se o produto está ativo para venda
  @Column({ default: true })
  isActive: boolean;

  // Especificações técnicas do produto em formato JSON
  @Column('jsonb', { nullable: true })
  specifications: Record<string, any>;

  // Relacionamento com a categoria (Muitos produtos para uma categoria)
  @ManyToOne(() => Category, category => category.products)
  category: Category;

  // Data de criação do registro
  @CreateDateColumn()
  createdAt: Date;

  // Data da última atualização
  @UpdateDateColumn()
  updatedAt: Date;
}
