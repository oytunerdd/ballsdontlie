// language.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLocale: string = 'en';
  private translations: any = {};
  constructor() { }

  getCurrentLocale(): string {
    return this.currentLocale;
  }




  translate(key: string): string {
    return this.translations[key] || key; 
  }
}
