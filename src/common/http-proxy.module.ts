import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HttpProxyService } from 'src/common/http-proxy.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [
    HttpProxyService,
  ],
  exports: [
    HttpProxyService,
  ]
})
export class HttpProxyModule {

}