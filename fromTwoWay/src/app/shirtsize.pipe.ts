import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shirtsize'
})
export class ShirtsizePipe implements PipeTransform {

  transform(shirtsize:number): any {
    if (shirtsize>=10 && shirtsize<19)
      return 'Small';

    else if (shirtsize>=19 && shirtsize<29)
      return 'Medium';

    else if (shirtsize>=29 && shirtsize<39)
      return 'Large';

    else if (shirtsize>=39 && shirtsize<49)
      return 'XL';

    else if (shirtsize>=49 && shirtsize<=59)
      return 'XXL';

    else if (shirtsize>=60 && shirtsize<=120)
      return 'XL+';

    else if (shirtsize>120)
      return 'Please enter a proper number';
  }

}
