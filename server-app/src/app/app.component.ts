import { Component, ContentChild, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  // created a single ts object to bind with child component serverElement
  serverElements = [{type: 'server', name:'Test server', content: 'just a test server'}];
  
  @ContentChild ('contentParagraph') contentParagraph!: ElementRef;
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  // lifecycle hook of destory- the serverElement one by one gets eliminated from 0
  onDestroyFirst(){
    this.serverElements.splice(0,1);
    console.log(this.serverElements);
  } 
}
