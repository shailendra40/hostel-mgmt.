// import { Controller } from '@nestjs/common';

// @Controller('hostel')
// export class HostelController {}


import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HostelService } from './hostel.service';
import { Prisma } from '@prisma/client';

@Controller('hostels')
export class HostelController {
  constructor(private readonly hostelService: HostelService) {}

  @Post()
  create(@Body() createHostelDto: Prisma.HostelCreateInput) {
    return this.hostelService.create(createHostelDto);
  }

  @Get()
  findAll() {
    return this.hostelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hostelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHostelDto: Prisma.HostelUpdateInput) {
    return this.hostelService.update(+id, updateHostelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hostelService.remove(+id);
  }
}
