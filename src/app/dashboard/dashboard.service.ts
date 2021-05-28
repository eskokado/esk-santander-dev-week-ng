import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Stock from "../shared/models/stock-model";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseUrl='http://esk-santander-dev-week-api.herokuapp.com/esk-santander-dev-week-api/v1';

  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]> {
      return this.http.get<Stock[]>(`${this.baseUrl}/stocks`).toPromise();
  }
}
