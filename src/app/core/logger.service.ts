import { Injectable } from '@angular/core';

@Injectable()
export class Logger {
          info(message: string) {
                    console.log(message);
          }

          error(message: string) {
                    console.error(message);
          }
}
