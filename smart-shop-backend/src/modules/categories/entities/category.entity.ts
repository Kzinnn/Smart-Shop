import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

/**
 * Entidade Category - Representa uma categoria de produtos
 * Permite organizar produtos em grupos hierárquicos
 */
@Entity('categories')
export class Category {
  // Identificador único da categoria
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Nome da categoria
  @Column()
  name: string;

  // Descrição da categoria
  @Column('text', { nullable: true })
  description: string;

  // ID da categoria pai (para estrutura hierárquica)
  @Column({ nullable: true })
  parentId: string;

  // Indica se a categoria está ativa
  @Column({ default: true })
  isActive: boolean;

  // Relacionamento com produtos (Uma categoria pode ter muitos produtos)
  @OneToMany(() => Product, product => product.category)
  products: Product[];

  // Data de criação do registro
  @CreateDateColumn()
  createdAt: Date;

  // Data da última atualização
  @UpdateDateColumn()
  updatedAt: Date;
}
