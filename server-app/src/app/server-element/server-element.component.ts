import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // @input decorator is used to bind component with serverElement component- srvElement is a alias for element
  @Input('srvElement')
  // single element property type definition to display in serverElement html file 
  element!: { type: string; name: string; content: string; };

  constructor() { }

  ngOnInit(): void {
  }

}
