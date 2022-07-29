import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Author } from "../Models/authors";

@Component({
  selector:'author-details',
  template:`<div class="d-flex flex-row container justify-content-center">
    <div class="d-flex flex-row col-md-6 mt-2 ">
      <div class="d-flex flex-grow-1">
      {{author.firstName}} -- {{author.lastName}}
      </div>
      <div class="d-flex me-2">
        <button class="btn btn-success" (click)="select.emit(author)">Select</button>
      </div>
      <div class="d-flex">
        <button class="btn btn-danger" (click)="delete.emit(author.id)">Delete</button>
      </div>
    </div>
  </div>`
})

export class AuthorDetailComponent implements OnInit{
  @Input()
  author!: Author;
  @Input()
  currentAuthor!: Author;
  @Input()
  isFirst: boolean = false;
  @Output()
  select = new EventEmitter<Author>();
  @Output()
  delete = new EventEmitter<number>();
  ngOnInit(): void
  {

  }

}
