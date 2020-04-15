import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'decorateExtendedPhone' })
export class DecorateExtendedPhone {
  transform(value: null | string | string[]) {

    var result: string[] = [];
    var values: string[] = typeof value === "string" ? value.split(',') : (value as string[]);

    if (value == null || value.length === 0)
      return result;

    if(!!value && typeof value === "string"){
      let newVal = value.replace(/\D/g, '');

      if (newVal.substring(0, 1) === '7' || newVal.substring(0, 1) === '8') {
        if (newVal.length === 0) {
          newVal = '';
        } else {
          newVal = newVal.replace(/^(7|8)(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/, '+$1($2) $3-$4-$5');
        }
      } else if (newVal.substring(0, 3) === '375') {
        if (newVal.length === 0) {
          newVal = '';
        } else {
          newVal = newVal.replace(/^(375)(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/, '+$1($2) $3-$4-$5');
        }
      }

      return newVal;
    }

    values.forEach(phone => {
      let newVal = phone.replace(/\D/g, '');

      if (newVal.substring(0, 1) === '7' || newVal.substring(0, 1) === '8') {
        if (newVal.length === 0) {
          newVal = '';
        } else {
          newVal = newVal.replace(/^(7|8)(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/, '+$1($2) $3-$4-$5');
        }
      } else if (newVal.substring(0, 3) === '375') {
        if (newVal.length === 0) {
          newVal = '';
        } else {
          newVal = newVal.replace(/^(375)(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/, '+$1($2) $3-$4-$5');
        }
      }

      result.push(newVal);
    });
    return result;
  }
}
