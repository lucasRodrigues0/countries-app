import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/model/country';
import { AppService } from 'src/app/service/app-service.service';


@Component({
  selector: 'app-detalhes-pais',
  templateUrl: './detalhes-pais.component.html',
  styleUrls: ['./detalhes-pais.component.less']
})
export class DetalhesPaisComponent implements OnInit {

  country: Array<Country> | undefined;
  errorMessage: string | undefined;

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

}
