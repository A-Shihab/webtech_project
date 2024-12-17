import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebsiteService } from './website.service';
import { WebsiteController } from './website.controller';
import { User, Category, Income, Expense, Budget, Saving, Report } from './website.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Category, Income, Expense, Budget, Saving, Report]),
  ],
  controllers: [WebsiteController],
  providers: [WebsiteService],
})
export class WebsiteModule {}
