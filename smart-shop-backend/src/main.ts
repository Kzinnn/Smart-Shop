import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });

  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
  }));

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Smart Shop API')
    .setDescription('API de e-commerce do Smart Shop')
    .setVersion('1.0')
    .addTag('produtos', 'Gerenciamento de produtos')
    .addTag('categorias', 'Gerenciamento de categorias')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    customSiteTitle: 'Smart Shop API Documentation',
    customfavIcon: 'https://nestjs.com/img/logo_text.svg',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
    ],
    customCssUrl: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
    ],
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
      docExpansion: 'list',
      filter: true,
      showCommonExtensions: true,
      syntaxHighlight: {
        activate: true,
        theme: 'agate',
      },
    },
  });

  // Start the application
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`Aplicação rodando em: http://localhost:${port}`);
  console.log(`Documentação Swagger disponível em: http://localhost:${port}/docs`);
}

bootstrap();
