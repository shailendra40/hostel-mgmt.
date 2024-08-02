// import { Module } from '@nestjs/common';
// import { HostelService } from './hostel.service';
// import { HostelController } from './hostel.controller';

// @Module({
//   providers: [HostelService],
//   controllers: [HostelController]
// })
// export class HostelModule {}


import { Module } from '@nestjs/common';
import { HostelService } from './hostel.service';
import { HostelController } from './hostel.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [HostelController],
  providers: [HostelService],
})
export class HostelModule {}
