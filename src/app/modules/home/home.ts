import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../model/pokemon';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  logo = '/pokemon.png';
  searchTerm: string = '';
  pokemon!: Pokemon;

  constructor(private service: PokemonService) {}

  ngOnInit() {
    this.service.getPokemon('pikachu').subscribe((data: Pokemon) => {
      this.pokemon = data;
    });
  }

  onSearchClick() {
    console.log('Searching for pokemon:', this.searchTerm);
    this.service.getPokemon(this.searchTerm).subscribe((data: Pokemon) => {
      this.pokemon = data;
    });
  }
}
