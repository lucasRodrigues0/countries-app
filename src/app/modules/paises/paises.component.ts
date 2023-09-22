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

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getAll().subscribe({
      next: res => this.list = res,
      error: err => console.log(err)
    });
  }

}
