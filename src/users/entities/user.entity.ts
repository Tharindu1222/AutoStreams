import { Listing } from 'src/listings/entities/listing.entity';
import { Offer } from 'src/offers/entities/offer.entity';
import { TestDrive } from 'src/test_drives/entities/test-drive.entity';
import { TradeIn } from 'src/trade_ins/entities/trade-in.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;
  
  @Column()
  lastName: string;
  
  @Column({ unique: true })
  email: string;
  
  @Column()
  phoneNumber: string;
  
  @Column()
  password: string; // Should be hashed

  @Column({ default: 'customer' })
  role: string; // Can be 'customer', 'admin', 'dealer'
  
  @OneToMany(() => Listing, listing => listing.user)
  listings: Listing[];

  @OneToMany(() => Offer, offer => offer.user)
  offers: Offer[];

  @OneToMany(() => TradeIn, tradeIn => tradeIn.user)
  tradeIns: TradeIn[];

  @OneToMany(() => TestDrive, testDrive => testDrive.user)
  testDrives: TestDrive[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
