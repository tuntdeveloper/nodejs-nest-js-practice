import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { OrderModule } from './modules/order/order.module';
import { ProductModule } from './modules/product/product.module';
import { CartModule } from './modules/cart/cart.module';
import { AuthController } from './modules/auth/auth.controller';

@Module({
  imports:  [AuthModule, OrderModule, ProductModule, CartModule],
  controllers: [],
})
export class AppModule {}
