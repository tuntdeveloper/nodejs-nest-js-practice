import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
@Gl
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
