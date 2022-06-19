import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getProfessores(): Observable<any> {
    return this.http.get("http://localhost:3000/professores");
  }

}
