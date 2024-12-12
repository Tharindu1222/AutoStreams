import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { ListingsService } from './listings.service';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/updatelisting.dto';

@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}
  
  @Post()
  @UseGuards()
  create(@Body() createListingDto: CreateListingDto) {
    return this.listingsService.create(createListingDto);
  }
  
  @Get()
  findAll() {
    return this.listingsService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.listingsService.findOne(id);
  }
  
  @Put(':id')
  @UseGuards()
  update(@Param('id') id: number, @Body() updateListingDto: UpdateListingDto) {
    return this.listingsService.update(id, updateListingDto);
  }
  
  @Delete(':id')
  @UseGuards()
  remove(@Param('id') id: number) {
    return this.listingsService.remove(id);
  }
}
