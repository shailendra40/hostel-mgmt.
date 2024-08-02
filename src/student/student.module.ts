// import { Module } from '@nestjs/common';
// import { StudentService } from './student.service';
// import { StudentController } from './student.controller';

// @Module({
//   providers: [StudentService],
//   controllers: [StudentController]
// })
// export class StudentModule {}


import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
