import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateInput, TranslateResult } from '../interfaces/translate';
@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(
    private http: HttpClient
  ) { }

  translate(input: TranslateInput):Observable<TranslateResult>{
    console.log(input)
    return this.http.post<TranslateResult>('http://localhost:8000/translate', input)
  }
}
