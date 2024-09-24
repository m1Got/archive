import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { PersistanceService } from "src/app/services/persistance.service";

type TLanguage = "ru" | "uz";

@Injectable()
export class TranslateService {
  private currentLanguage$ = new BehaviorSubject<TLanguage>("ru");

  constructor(private persistanceService: PersistanceService) {
    const language = this.persistanceService.get("language");
    if (language) {
      this.setLanguage(language);
    }
  }

  setLanguage(value: TLanguage) {
    this.currentLanguage$.next(value);
    this.persistanceService.set("language", value);
  }

  getLanguage() {
    return this.currentLanguage$.asObservable();
  }

  getLanguageValue() {
    return this.currentLanguage$.getValue();
  }
}
