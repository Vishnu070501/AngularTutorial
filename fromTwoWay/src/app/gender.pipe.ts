import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})//this tells the compiler that this is a pipe custom made
export class GenderPipe implements PipeTransform {

  //this is the method that has to be implemented to do whatever our functionality is with the pipe
  transform(data: any,        genderVal?:any):any{
    //      ^mandatory data    ^optional data(denoted by ?:any)(can be any number of parameters )
    if(genderVal == 'M')
      return 'Mr. '+data;
    else
      return 'Ms. '+data;
  }

}
