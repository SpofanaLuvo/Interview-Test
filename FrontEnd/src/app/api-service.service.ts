import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private apiEndpoint = "http://localhost:4201/api/heroes";

  updatedList: any[];
  constructor(private http: HttpClient) {}

  getContacts() {
    return this.http.get(this.apiEndpoint);
  }

  evolveContact(contact: any) {
    const payload = { name: contact.name, action: "evolve" };
    return this.http.post(this.apiEndpoint, payload);
  }
}
