import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
        name:'shortenLengthName'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any, limit:number) {
        if(value.length > 5) {
            return value.substr(0,limit) + '...';
        }else {
            return value
        }
       

    }
}