import { DynamicModule, Module } from '@nestjs/common';
import { EnvConfigService } from './env-config.service';
import { ConfigModule, ConfigModuleOptions } from '@nestjs/config';
import { join } from 'node:path';

@Module({
  providers: [EnvConfigService],
})
export class EnvConfigModule extends ConfigModule {
  static forRoot(options: ConfigModuleOptions = {}): Promise<DynamicModule> {
    const envfilepath = join(
      __dirname,
      `../../../../.env.${process.env.NODE_ENV}`,
    );
    return super.forRoot({
      ...options,
      envFilePath: [envfilepath],
    });
  }
}
