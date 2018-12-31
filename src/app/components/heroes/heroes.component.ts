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

  borraHeroe(key: string) {
    this.heroesService.borrarHeroe(key).subscribe(data => {
      if (data) {
        console.error(data);
      } else {
        //todo bien
        delete this.heroes[key];
      }
    });
  }
}
