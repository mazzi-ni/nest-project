import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AlbumsModule } from './albums/albums.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AlbumsModule, 
    AuthModule, 
    UsersModule,
    MongooseModule.forRoot(process.env.MONGODB_URI),
  ],
})
export class AppModule {}
