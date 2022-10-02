import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthorListComponent } from './Author/author-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'basics';
  currentProgress = 10;
  currentProgressOld = 0;
  isShowLifecyle = false;
  constructor() {}

  // @ViewChild(AuthorListComponent, { static: true })
  // authorComponent!: AuthorListComponent;
  // @ViewChild('viewChildBtn',{ static: true }) childBtn!: ElementRef<HTMLButtonElement>;
  ///in order 1
  ngOnChanges(): void {
    if (this.isShowLifecyle) {
      console.log('1.ngOnChanges - appcomponent');
      console.log('1.ngOnChanges - appcomponent');
    }
  }
  ///in order 2
  ngOnInit(): void {
    if (this.isShowLifecyle) {

    }

    console.log('2.ngOnInit - appcomponent');
    // console.log('2.ngOnInit - appcomponent', this.childBtn);
    // this.childBtn.nativeElement.classList.add('btn-success');
    // this.childBtn.nativeElement.classList.remove('btn-primary');
  }
  ///in order 3-5
  ngDoCheck(): void {
    if (this.isShowLifecyle) {
      console.log('3->5.ngDoCheck - appcomponent');
    }
  }

  ///in order 6
  ngAfterContentInit(): void {
    if (this.isShowLifecyle) {
      console.log('6.ngAfterContentInit - appcomponent');
    }
  }

  ///in order 7-9
  ngAfterContentChecked(): void {
    if (this.isShowLifecyle) {
      console.log(
        '7->9.ngAfterContentChecked - appcomponent'
      );
    }
  }
  //in order 10
  ngAfterViewInit(): void {
    if (this.isShowLifecyle) {
      console.log('10.ngAfterViewInit - appcomponent');
    }
  }
  //in order 11-13
  ngAfterViewChecked(): void {
    if (this.isShowLifecyle) {
      console.log(
        '11->13.ngAfterViewChecked - appcomponent');
    }
  }
  //in order 14
  ngAOnDestroy(): void {
    if (this.isShowLifecyle) {
      console.log('14.ngAOnDestroy - appcomponent');
    }
  }
}
