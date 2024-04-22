import { Injectable } from '@angular/core';
import axios from 'axios';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  apiUrl = "https://api.balldontlie.io/v1/players"
  apiKey = "a1acad24-b235-430f-b13c-0d9d49302713"
  constructor() { }

  async getAllPlayers(cursor:number, per_page:number): Promise<Player[]> {
    const resp = await axios.get(this.apiUrl + `?cursor=${cursor}&per_page=${per_page}`, {headers:{"Authorization":this.apiKey}})
    console.log(await resp.data)
    return resp.data.data || {};
  }
}
