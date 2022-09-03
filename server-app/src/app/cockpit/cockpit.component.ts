import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // if there is a change in the child Component(cockpit) and to inform the parent component(app component) about the changes we use output decorator
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // binding custom event by assigning a alias
  // event data is emitted to other component using event emitter - 
  // Creates an instance of this class that can deliver events synchronously or asynchronously. EventEmitter<T> -- generic typr
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }
  // local reference
  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput);
    console.log(nameInput.value);
    this.serverCreated.emit({
     serverName: nameInput.value,
     serverContent: this.newServerContent
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
     });
  }
}
