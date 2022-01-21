import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    username='';
    showDisplay= false;
    log=[];

    onToggleDisplay(){
        this.showDisplay = !this.showDisplay;
        this.log.push(this.log.length+1);
    }
}