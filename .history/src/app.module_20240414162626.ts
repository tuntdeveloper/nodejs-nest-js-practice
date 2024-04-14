import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { OrderModule } from './modules/order/order.module';
import { ProductModule } from './modules/product/product.module';
import { CartModule } from './modules/cart/cart.module';

@Module({
  imports:  [AuthModule, OrderModule, ProductModule, CartModule],
  controllers: [Auth],
})
export class AppModule {}
