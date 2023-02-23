import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private apiEndpoint = "http://localhost:4201/api/heroes";

  updatedList: any[];
  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http.get(this.apiEndpoint);
  }

  evolveHero(hero: any) {
    const payload = { name: hero.name, action: "evolve" };
    return this.http.post(this.apiEndpoint, payload);
  }
}
