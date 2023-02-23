import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api-service.service";
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  contacts: any[];
  heroEvolved: boolean = false;

  constructor(private apiService: ApiService) {}

  buttonClick(contact: any) {
    this.heroEvolved = true;
    this.apiService.evolveContact(contact).subscribe((response: any[]) => {
      console.log(JSON.stringify(response));
      this.contacts = [];
      this.contacts.push(response);
    });
  }
  ngOnInit() {
    this.apiService.getContacts().subscribe((response: any[]) => {
      this.contacts = response;
    });
  }
}
