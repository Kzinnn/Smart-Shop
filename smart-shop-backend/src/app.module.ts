import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './modules/products/products.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { Product } from './modules/products/entities/product.entity';
import { Category } from './modules/categories/entities/category.entity';

/**
 * Módulo principal da aplicação
 * Configura as dependências globais e módulos principais
 */
@Module({
  imports: [
    // Configuração global de variáveis de ambiente
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // Configuração do TypeORM para conexão com o banco de dados
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        port: configService.get('DB_PORT', 5432),
        username: configService.get('DB_USERNAME', 'postgres'),
        password: configService.get('DB_PASSWORD', 'postgres'),
        database: configService.get('DB_DATABASE', 'smart_shop'),
        entities: [Product, Category],
        // Sincronização automática do esquema (desativado em produção)
        synchronize: configService.get('NODE_ENV') !== 'production',
      }),
      inject: [ConfigService],
    }),
    // Módulo de produtos
    ProductsModule,
    // Módulo de categorias
    CategoriesModule,
  ],
})
export class AppModule {}
