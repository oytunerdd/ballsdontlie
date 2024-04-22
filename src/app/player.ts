export interface Player {
    id:number;
    first_name:string;
    last_name:string;
    position:string;
    height:string;
    weight:string;
    jersey_number:string;
    college:string;
    country:string;
    draft_year:number;
    draft_round:any;
    draft_number:any;
    team:Team;
  }
  export interface Team {
    id:number;
    conference:string;
    division:string;
    city:string;
    name:string;
    full_name:string;
    abbreviation:string
  }