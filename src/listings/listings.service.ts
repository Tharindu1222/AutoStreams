import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Listing } from './entities/listing.entity';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/updatelisting.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class ListingsService {
  constructor(
    @InjectRepository(Listing)
    private listingsRepository: Repository<Listing>,
    private usersService: UsersService,
  ) {}
  
  async create(createListingDto: CreateListingDto): Promise<Listing> {
    const user = await this.usersService.findOne(createListingDto.userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const listing = this.listingsRepository.create({ ...createListingDto, user });
    return this.listingsRepository.save(listing);
  }
  
  findAll(): Promise<Listing[]> {
    return this.listingsRepository.find();
  }
  
  findOne(id: number): Promise<Listing> {
    return this.listingsRepository.findOne({ where: { id } });
  }
  
  async update(id: number, updateListingDto: UpdateListingDto): Promise<Listing> {
    const listing = await this.findOne(id);
    if (!listing) {
      throw new NotFoundException('Listing not found');
    }
    Object.assign(listing, updateListingDto);
    return this.listingsRepository.save(listing);
  }
  
  async remove(id: number): Promise<void> {
    const listing = await this.findOne(id);
    if (!listing) {
      throw new NotFoundException('Listing not found');
    }
    await this.listingsRepository.remove(listing);
  }
}
