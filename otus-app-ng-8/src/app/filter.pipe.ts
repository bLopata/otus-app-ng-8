import { Pipe, PipeTransform, Injectable } from "@angular/core";

@Pipe({
  name: "filter"
})
@Injectable()
export class FilterPipe implements PipeTransform {
    /**
   * Method to filter results from the database based on keyword match.
   * 
   * @remarks
   * Implements the `studentSearch()` method from the `Student` model.
   * 
   * @param items - The list of objects to filter.
   * @param keyword - The keyword to search against the items.
   * @returns The filtered list of items.
   */
  transform(items: Array<any>, keyword: String): any[] {
    if (!items) return [];
    if (!keyword) return items;
    debugger;
    return items.filter(i => i.studentSearch(keyword));
  }
}
