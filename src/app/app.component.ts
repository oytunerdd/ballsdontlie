import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkModeService } from './dark-mode.service';
import { DarkModeToggleComponent } from "./dark-mode-toggle/dark-mode-toggle.component";
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { PlayersService } from './players.service';
import { HomeTableComponent } from "./home-table/home-table.component";
import { LanguageService } from './language.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, DarkModeToggleComponent, LanguageSwitcherComponent, HomeTableComponent]
})
export class AppComponent implements OnInit{
  title = 'task';
  constructor(private darkModeService: DarkModeService,
     private playersService:PlayersService,
     private languageService:LanguageService, private titleService: Title){}
  ngOnInit(): void {
    this.titleService.setTitle($localize`${this.title}`)

  }
}
