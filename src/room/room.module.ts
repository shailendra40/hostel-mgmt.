// import { Module } from '@nestjs/common';
// import { RoomService } from './room.service';
// import { RoomController } from './room.controller';

// @Module({
//   providers: [RoomService],
//   controllers: [RoomController]
// })
// export class RoomModule {}


import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RoomController],
  providers: [RoomService],
})
export class RoomModule {}
