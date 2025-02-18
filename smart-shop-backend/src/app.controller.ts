import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getApiInfo() {
    return {
      name: 'Smart Shop API',
      version: '1.0.0',
      description: 'API de e-commerce do Smart Shop',
      endpoints: {
        docs: '/docs',
        products: '/products',
        categories: '/categories'
      }
    };
  }
}
