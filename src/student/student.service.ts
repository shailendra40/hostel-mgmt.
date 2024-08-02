// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class StudentService {}


import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.StudentCreateInput) {
    return this.prisma.student.create({ data });
  }

  findAll() {
    return this.prisma.student.findMany();
  }

  findOne(id: number) {
    return this.prisma.student.findUnique({ where: { id } });
  }

  update(id: number, data: Prisma.StudentUpdateInput) {
    return this.prisma.student.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.student.delete({ where: { id } });
  }
}
