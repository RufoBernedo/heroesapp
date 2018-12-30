import { Component, OnInit } from "@angular/core";
import { HeroesService } from "src/app/services/heroes.service";
import { Heroe } from "../../interfaces/heroe.interface";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes: any[] = [];

  constructor(private heroesService: HeroesService) {
    this.heroesService.getHeroes().subscribe(data => {
      console.log(data);
      this.heroes = data;
    });
  }

  ngOnInit() {}
}
