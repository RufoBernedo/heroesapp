import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Heroe } from "../../interfaces/heroe.interface";
import { HeroesService } from "../../services/heroes.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styles: []
})
export class HeroeComponent implements OnInit {
  private heroe: Heroe;

  nuevo: boolean = false;
  id: string;

  constructor(
    private heroesService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(parametros => {
      this.id = parametros["id"];

      if (this.id != "nuevo") {
        this.heroesService.getHeroe(this.id).subscribe( (data : Heroe) => this.heroe = data);
      }
    });
  }

  ngOnInit() {}

  guardar() {
    console.log(this.heroe);

    if (this.id == "nuevo") {
      //insertando
      this.heroesService.nuevoHeroe(this.heroe).subscribe(
        data => {
          console.log(data.json);
          this.router.navigate(["/heroe", data.name]);
        },
        error => console.log(error)
      );
    } else {
      //actualizando
      this.heroesService.actualizarHeroe(this.heroe, this.id).subscribe(
        data => {
          console.log(data.json);
        },
        error => console.log(error)
      );
    }
  }


agregarNuevo(forma : NgForm){

  console.log("asdasdasdasdasd");
  this.router.navigate(['/heroe','nuevo']);
  forma.reset({
    casa : 'Marvel'
  });
}

}
