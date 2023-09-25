import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/model/country';
import { AppService } from 'src/app/service/app-service.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.less']
})
export class PaisesComponent implements OnInit {

  public list: Array<Country> = [];
  protected filtered: string = "";
  public filteredList: Array<Country> = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getAll().subscribe({
      next: res => {
        this.list = res;
        this.showFiltered();
      },
      error: err => console.log(err)
    });
  }

  protected showFiltered() {
    if(this.filtered === "") {
      this.filteredList = [...this.list];
    } else {
      this.filteredList = this.list.filter((country) => country.name.common.toLowerCase().includes(this.filtered.toLowerCase()));
    }
  }

}
