import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'colorText',
})
export class ColorTextPipe implements PipeTransform {
  transform(value: number): string {
    return Color[value];
  }
}
