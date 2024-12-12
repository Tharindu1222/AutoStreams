import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/database.config';
import { ListingsModule } from './listings/listings.module';
import { OffersModule } from './offers/offers.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TradeInsModule } from './trade_ins/trade-ins.module';
import { TestDrivesModule } from './test_drives/test-drives.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: typeOrmConfig,
      inject: [ConfigService],
    }),
    ListingsModule,
    OffersModule,
    TradeInsModule,
    TestDrivesModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
