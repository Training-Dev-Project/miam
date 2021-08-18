import { Pipe, PipeTransform } from '@angular/core';

type ErroMessage = {
  message: string
};

@Pipe({
  name: 'decodeErrorMessage'
})
export class DecodeErrorMessagePipe implements PipeTransform {

  transform(value:any , ...args: unknown[]): unknown {
    return value.message;
  }

}
