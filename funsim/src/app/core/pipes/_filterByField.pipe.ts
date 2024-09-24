import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  standalone: true,
  name: "filterByField",
  pure: false,
})
export class FilterByFieldPipe implements PipeTransform {
  transform(items: any[], searchText: string, fieldName: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    return items.filter((item) => {
      if (item && item[fieldName]) {
        return item[fieldName].toLowerCase().includes(searchText.toLowerCase());
      }
      return false;
    });
  }
}
