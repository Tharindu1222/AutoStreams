import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Listing } from 'src/listings/entities/listing.entity';
import { Offer } from 'src/offers/entities/offer.entity';
import { TradeIn } from 'src/trade_ins/entities/trade-in.entity';
import { TestDrive } from 'src/test_drives/entities/test-drive.entity';
import { User } from 'src/users/entities/user.entity';


export const typeOrmConfig = async (configService: ConfigService): Promise<TypeOrmModuleOptions> => ({
  type: 'mysql',
  host: configService.get<string>('DB_HOST'),
  port: parseInt(configService.get<string>('DB_PORT'), 10) || 3306,
  username: configService.get<string>('DB_USER'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_NAME'),
  entities: [Listing, Offer, TradeIn, TestDrive, User],
  synchronize: true, // Set to false in production
});
