// language-switcher.component.ts
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-language-switcher',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {
  constructor(private languageService: LanguageService, private router:Router, private route: ActivatedRoute,)  {}

  ngOnInit(): void {}

  switchLanguage(language: string): void {

    
   
  }
}
