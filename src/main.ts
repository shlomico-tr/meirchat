import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import config from './config/configuration';

async function bootstrap() {
  const settings = config();

  const app = await NestFactory.create(AppModule, {});
  
  app.setGlobalPrefix(settings.apiPathPrefix);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: '*',
    credentials: true,
    
  })
  setSwagger(app);

  await app.listen(config().port);
}

function setSwagger(app) {
  const config = new DocumentBuilder()
    .setTitle('eToro chatGPT Api')
    .setDescription('eToro chatGPT API for Plugin API')
    .setVersion('0.0.1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

bootstrap();
