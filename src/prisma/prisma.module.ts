// import { Module } from '@nestjs/common';
// import { PrismaService } from './prisma.service';

// @Module({
//   providers: [PrismaService]
// })
// export class PrismaModule {}


import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
