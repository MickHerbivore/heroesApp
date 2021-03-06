import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap, tap } from 'rxjs/operators';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor( private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => this.heroesService.getHeroeporId( id ) )
    ).subscribe( heroe => this.heroe = heroe );

  }

}
