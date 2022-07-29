import { Component, OnInit, VERSION } from '@angular/core';
import { Author, authors as authorsModel } from '../Models/authors';

@Component({
  selector: 'author-list',
  template: `
  <author-details *ngFor="let author of authors;first as isFirst"
  [author] = "author" [currentAuthor] ="currentAuthor"
  [isFirst] ="isFirst"
  (select)="onSelected($event)"
  (delete)="handleDelete($event)"
  ></author-details>
 <div class="container">
  <div class="row">
    <div class="col-md-6">
      <div class="my-2 text-primary">The first name: {{currentAuthor.firstName}}</div>
    </div>

  </div>
  <div class="row">
    <div class="col-md-6">
    <label for="exampleInputPassword1" class="form-label">Input: {{name}}</label>
    <input type="text" [(ngModel)]="name" class="form-control" />
    </div>

  </div>


 </div>

  `
})
export class AuthorListComponent implements OnInit {
  authors = authorsModel;
  currentAuthor = this.authors[0];
  name = 'Angular' + VERSION.major;
  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor;
  }

  handleDelete(authorId: number){
    console.log('authorId',authorId)
    this.authors = this.authors.filter(x => x.id !== authorId);

    if(this.currentAuthor.id === authorId){
      this.currentAuthor === this.authors[0];
    }
  }

  ngOnInit(): void {}
}
