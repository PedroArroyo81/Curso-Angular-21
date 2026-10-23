import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { filter, map, Observable } from "rxjs";
import { Comentario } from '../model/comentario';
import { Post } from "../model/post";

@Service()
export class FakeService {
    private http: HttpClient = inject(HttpClient);
    urlBase = "https://jsonplaceholder.typicode.com/";

    totalPost(): Observable<Post[]> {
        return this.http.get<Post[]>(this.urlBase + "posts");
    }

    comentariosPost(postId: number): Observable<Comentario[]> {
        return this.http.get<Comentario[]>(this.urlBase + "comments", {
            "params": { "postId": postId }
        });
    }

    comentariosUsuario(email: string): Observable<Comentario[]> {
        let comentariosTotales: Observable<Comentario[]> = this.http.get<Comentario[]>(this.urlBase + "comments");
        return comentariosTotales.pipe(map(lista => lista.filter(c => c.email == email)));
    }
}