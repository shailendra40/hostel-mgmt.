import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { HostelModule } from './hostel/hostel.module';
import { RoomModule } from './room/room.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [PrismaModule, HostelModule, RoomModule, StudentModule],
})
export class AppModule {}
