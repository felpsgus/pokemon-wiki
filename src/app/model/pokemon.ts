export interface Pokemon {
  name: string;
  id: number;
  height: number;
  sprites: {
    front_shiny: string;
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
}
