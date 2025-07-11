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
  logo = 'pokemon.png';
  searchTerm: string = '';
  pokemon: Pokemon | null = null;
  loading: boolean = false;
  error: string | null = null;

  constructor(private service: PokemonService) {}

  ngOnInit() {
    this.loadPokemon('pikachu');
  }

  private loadPokemon(name: string) {
    this.loading = true;
    this.error = null;

    this.service.getPokemon(name).subscribe({
      next: (data: Pokemon) => {
        this.pokemon = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching pokemon:', error);
        this.error = `Pokémon "${name}" não encontrado. Tente outro nome.`;
        this.loading = false;
        this.pokemon = null;
      },
    });
  }

  onSearchClick() {
    if (this.searchTerm.trim()) {
      this.loadPokemon(this.searchTerm.toLowerCase().trim());
    }
  }
}
