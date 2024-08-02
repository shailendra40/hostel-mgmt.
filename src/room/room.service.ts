// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class RoomService {}


import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.RoomCreateInput) {
    return this.prisma.room.create({ data });
  }

  findAll() {
    return this.prisma.room.findMany();
  }

  findOne(id: number) {
    return this.prisma.room.findUnique({ where: { id } });
  }

  update(id: number, data: Prisma.RoomUpdateInput) {
    return this.prisma.room.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.room.delete({ where: { id } });
  }
}
