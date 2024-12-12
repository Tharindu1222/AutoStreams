import { 
    IsString, 
    IsNotEmpty, 
    IsNumber, 
    IsOptional, 
    IsArray, 
    ValidateNested 
  } from 'class-validator';
  import { Type } from 'class-transformer';
import { Roles } from 'src/auth/roles.decorator';
  
  class ListingFeaturesDto {
    @IsArray()
    @IsString({ each: true })
  
    convenience: string[];
  
    @IsArray()
    @IsString({ each: true })
    infotainment: string[];
  
    @IsArray()
    @IsString({ each: true })
    safetyAndSecurity: string[];
  
    @IsArray()
    @IsString({ each: true })
    interiorAndSeats: string[];
  
    @IsArray()
    @IsString({ each: true })
    windowsAndLighting: string[];
  
    @IsArray()
    @IsString({ each: true })
    otherFeatures: string[];
  }
  
  export class CreateListingDto {
    @IsString()
    @IsNotEmpty()
    title: string;
  
    @IsString()
    condition: string;
  
    @IsString()
    regno: string;
  
    @IsString()
    make: string;
  
    @IsString()
    model: string;
  
    @IsNumber()
    yearofmanufacture: number;
  
    @IsNumber()
    mileage: number;
  
    @IsString()
    fuelType: string;
  
    @IsString()
    bodyType: string;
  
    @IsString()
    transmission: string;
  
    @IsString()
    district: string;
  
    @IsString()
    city: string;
  
    @IsNumber()
    engineCc: number;
  
    @IsNumber()
    price: number;
  
    @IsString()
    @IsOptional()
    sellersNotes?: string;
  
    @IsString()
    status: string;
  
    @IsNumber()
    userId: number;
  
    @IsOptional()
    @IsString()
    grade?: string;
  
    @IsOptional()
    @IsString()
    exteriorColor?: string;
  
    @IsOptional()
    @IsString()
    interiorColor?: string;
  
    @IsOptional()
    @IsNumber()
    noOfOwners?: number;
  
    @IsOptional()
    @IsString()
    blueTGrade?: string;
  
    @IsOptional()
    @IsNumber()
    yearOfReg?: number;
  
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    imageUrls?: string[];
  
    @IsOptional()
    @ValidateNested()
    @Type(() => ListingFeaturesDto)
    listingFeatures?: ListingFeaturesDto;
  }
  