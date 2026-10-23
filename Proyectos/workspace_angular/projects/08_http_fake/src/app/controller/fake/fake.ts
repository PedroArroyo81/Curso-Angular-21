import { Component, OnInit, signal, ɵSIGNAL } from '@angular/core';
import { FakeService } from '../../services/fake-service';
import { Comentario } from '../../model/comentario';
import { Post } from '../../model/post';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-fake',
  styleUrl: './fake.css',
  templateUrl: './fake.html',
})
export class Fake implements OnInit {
  constructor(private fService: FakeService) { }

  ngOnInit(): void {
    this.fService.totalPost().subscribe({
      next: data => this.posts.set(data),
      error: er => alert(er)
    });
  }

  posts = signal<Post[]>([]);
  comentarios = signal<Comentario[]>([]);
  postSelected = signal<number>(0);

  cargarComentarios(): void {
    this.fService.comentariosPost(this.postSelected()).subscribe({
      next: data => this.comentarios.set(data),
      error: er => alert(er)
    });
  }

}
