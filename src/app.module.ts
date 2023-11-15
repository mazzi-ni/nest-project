import { Module } from '@nestjs/common';

import { AlbumsModule } from './albums/albums.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AlbumsModule, AuthModule, UsersModule],
})
export class AppModule {}
