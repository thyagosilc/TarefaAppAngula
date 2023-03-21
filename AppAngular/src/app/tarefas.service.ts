import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from './Tarefa';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  url = 'http://localhost:24114/api/v1/tarefas';

  constructor(private http: HttpClient) { }


  ObterTodos(): Observable<Tarefa[]>{
    const apiUrl = `${this.url}`;
    return this.http.get<Tarefa[]>(apiUrl);
  }

  ObterPorId(id: string): Observable<Tarefa>{
    const apiUrl = `${this.url}/${id}`;
    return this.http.get<Tarefa>(apiUrl);
  }

  SalvarTarefa(tarefa: Tarefa): Observable<any>{
    const apiUrl = `${this.url}`;
    return this.http.post<Tarefa>(apiUrl, tarefa, httpOptions);
  }

  AtualizarTarefa(tarefa: Tarefa): Observable<any>{
    const apiUrl = `${this.url}/${tarefa.id}`;
    return this.http.put<Tarefa>(apiUrl, tarefa, httpOptions);
  }

  ExcluirTarefa(id: string): Observable<any>{
    const apiUrl = `${this.url}/${id}`;
    return this.http.delete<string>(apiUrl, httpOptions);
  }
}
