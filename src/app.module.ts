import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { OrderModule } from './modules/order/order.module';
import { ProductModule } from './modules/product/product.module';
import { CartModule } from './modules/cart/cart.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports:  [AuthModule, OrderModule, ProductModule, CartModule, PrismaModule],
  controllers: [],
})
export class AppModule {}
