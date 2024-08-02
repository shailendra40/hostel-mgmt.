// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class HostelService {}


import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class HostelService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.HostelCreateInput) {
    return this.prisma.hostel.create({ data });
  }

  findAll() {
    return this.prisma.hostel.findMany();
  }

  findOne(id: number) {
    return this.prisma.hostel.findUnique({ where: { id } });
  }

  update(id: number, data: Prisma.HostelUpdateInput) {
    return this.prisma.hostel.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.hostel.delete({ where: { id } });
  }
}
