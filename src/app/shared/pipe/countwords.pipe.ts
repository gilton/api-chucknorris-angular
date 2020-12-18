import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countwords'
})
export class CountwordsPipe implements PipeTransform {

  transform(value: string): string {
    let qtdPalavras:string = "";

    qtdPalavras = value.length.toString();

    console.log('qtde de letras: ', qtdPalavras);
    return qtdPalavras;
  }

}
