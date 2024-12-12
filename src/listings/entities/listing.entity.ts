import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
  } from 'typeorm';
  import { User } from '../../users/entities/user.entity';

  
  @Entity('listings')
  export class Listing {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column()
    condition: string;
  
    @Column({ unique: true })
    regno: string;
  
    @Column()
    make: string;
  
    @Column()
    model: string;
  
    @Column()
    yearofmanufacture: number;
  
    @Column()
    mileage: number;
  
    @Column()
    fuelType: string;
  
    @Column()
    bodyType: string;
  
    @Column()
    transmission: string;
  
    @Column()
    district: string;
  
    @Column()
    city: string;
  
    @Column()
    engineCc: number;
  
    @Column()
    price: number;
  
    @Column('text')
    sellersNotes: string;
  
    @Column()
    status: string; // e.g., draft, pending, published
  
    @ManyToOne(() => User, user => user.listings, { eager: true })
    user: User;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    // Additional Fields
    @Column({ nullable: true })
    grade: string;
  
    @Column({ nullable: true })
    exteriorColor: string;
  
    @Column({ nullable: true })
    interiorColor: string;
  
    @Column({ nullable: true })
    noOfOwners: number;
  
    @Column({ nullable: true })
    blueTGrade: string;
  
    @Column({ nullable: true })
    yearOfReg: number;
  
    @Column('simple-array', { nullable: true })
    imageUrls: string[];
  
    // Features (Stored as JSON)
    @Column('json', { nullable: true })
    listingFeatures: {
      convenience: string[];
      infotainment: string[];
      safetyAndSecurity: string[];
      interiorAndSeats: string[];
      windowsAndLighting: string[];
      otherFeatures: string[];
    };
    testDrives: any;
    offers: any;
  }
  