import { PathLocationStrategy } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit, Input, SimpleChange, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // @input decorator is used to bind component with serverElement component- srvElement is a alias for element
  // single element property type definition to display in serverElement html file 
  @Input('srvElement') element!: { type: string; name: string; content: string; };
  
  @ViewChild('heading', { static: true }) heading!: ElementRef;
  @ContentChild ('contentParagraph', { static: true }) contentParagraph!: ElementRef;

  // complete life cycle hooks - when a new component created or new object or event it
  //  goes into different phases and execute some Changes. These phases are hooked by 
  //  implementing a METHODS.

  // below mentioned methods are the lifecycle phases. first the constructor called then the ngonchanges called and so on

  constructor() { 
    console.log("constructor called");
    //console.log(this.element.name);
  }

  ngOnChanges(changes: SimpleChange){
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngOnInit(){
    console.log("ngOnInit called");
    // there will be no op in the below mentioned console bec only after the ngAfterViewInit Phase 
    // we can get the op bec this is the time point where the access the template elements and use its value
    console.log("the local reference heading value:"+this.heading.nativeElement.textContent);
    console.log("the local reference contentparagraph value:"+ this.contentParagraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log("ngDocheck called");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called");
    // here the op will be empty only after the ngAfterContentCheck phase the template is accessable same as ngViewInit
    console.log("the local reference contentparagraph value:"+ this.contentParagraph.nativeElement.textContent);
  }

  ngAfterContentCheck(){
    console.log("ngAfterContentCheck called");
    console.log("the local reference contentparagraph value:"+ this.contentParagraph.nativeElement.textContent);
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit called");
    console.log("the local reference heading value:"+ this.heading.nativeElement.text);
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called");
    console.log("the local reference heading value:"+ this.heading.nativeElement.text);
  }

  ngOnDestroy(){
    console.log("ngOnDestroy called");
  }
}
