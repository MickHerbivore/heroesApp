import { Pipe, PipeTransform } from '@angular/core';

import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {

    const locationImg: string = 'assets/heroes/';
    const extension: string = '.jpg';

    return heroe.id
      ? locationImg + heroe.id + extension
      : 'assets/no-image.png';
  }

}
