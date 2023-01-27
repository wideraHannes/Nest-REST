import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/* 
Now, any module that imports the PrismaModule will 
have access to PrismaService and can inject it into its own 
components/services. This is a common pattern for NestJS applications.
*/

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
