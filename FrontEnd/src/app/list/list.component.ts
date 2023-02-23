import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api-service.service";
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  heroes: any[];
  heroEvolved: boolean = false;

  constructor(private apiService: ApiService) {}

  buttonClick(hero: any) {
    this.heroEvolved = true;
    this.apiService.evolveHero(hero).subscribe((response: any[]) => {
      console.log(JSON.stringify(response));
      this.heroes = [];
      this.heroes.push(response);
    });
  }
  ngOnInit() {
    this.apiService.getHeroes().subscribe((response: any[]) => {
      this.heroes = response;
    });
  }
}
