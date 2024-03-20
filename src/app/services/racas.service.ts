import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { racas } from '../Models/racas.model';
@Injectable({
  providedIn: 'root'
})
export class RacasService {

  headerDog = new HttpHeaders({
    'x-api-key':'live_IzZ7UeqzEaR5xx26QoJPsLMSBEqKf68zw2skJpUC6XC88QpvZPbByrGlJWY9ddiN'
  });

  headerCat = new HttpHeaders({
    'x-api-key':'live_Sy68LIf4CTUMdfjF9dvuxO0PHQT4AGu1f0STj49SvsZcBOdE41RqVOCc75RU677N'
  });

  private urldog = environment.apidog;
  private urlcat = environment.apicat;
  
  constructor(private httpclient:HttpClient) { }

  obterRacasDogs(){
    return this.httpclient.get<racas[]>(this.urldog + '/v1/images/search?limit=20',{headers: this.headerDog})
  }

  obterRacasGatos(){
    return this.httpclient.get<racas[]>(this.urlcat + '/v1/images/search?limit=20',{headers: this.headerCat})
  }
}
