import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/model/country';
import { Currency } from 'src/app/model/currency';
import { AppService } from 'src/app/service/app-service.service';


@Component({
  selector: 'app-detalhes-pais',
  templateUrl: './detalhes-pais.component.html',
  styleUrls: ['./detalhes-pais.component.less']
})
export class DetalhesPaisComponent implements OnInit {

  country: Array<Country> | undefined;
  errorMessage: string | undefined;
  timezones: Array<string> = [];
  currencies: Currency = {};

  constructor(
    private appService: AppService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const countryName = routeParams.get('name');
    if(countryName !== null) {
      this.appService.getByName(countryName).subscribe({
        next: res => {
          this.country = res; 
          this.timezones = [...this.country[0].timezones];
          this.currencies = this.country[0].currencies;
        },
        error: err => {
          this.errorMessage = 'Ocorreu um erro ao carregar os dados do país.';
          console.error(this.errorMessage);
        }
      });
    } else {
      console.log('erro');
    }
  }

  getCurrencies(currencies: Currency): string[] {
    return Object.keys(currencies);
  }

}
//{{ country.currencies['code'].name }} - {{ country.currencies['code'].symbol }}