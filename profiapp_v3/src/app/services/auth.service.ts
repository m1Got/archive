import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  role: 'client' | 'executor' = 'executor';

  constructor() {}
}
