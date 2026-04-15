import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cfaCurrency',
  standalone: true
})
export class CfaCurrencyPipe implements PipeTransform {
  transform(value: number): string {
    return value.toLocaleString('fr-FR') + ' CFA';
  }
}