import { Request, Response, NextFunction } from 'express';
import { Injectable, NestMiddleware, Logger, ConsoleLogger } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private logger = new ConsoleLogger('HttpIncoming');

    use(request: Request, response: Response, next: NextFunction): void {
        const { ip, method, originalUrl } = request;
        const userAgent = request.get('user-agent') || '';

        response.on('finish', () => {
            const { statusCode } = response;
            const contentLength = response.get('content-length');
            // log error in case of http status code is 4xx or 5xx
            if (statusCode >= 400) {
                this.logger.error(`${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`);
            } else {
                this.logger.log(`${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`);
            }
        });

        next();
    }
}
