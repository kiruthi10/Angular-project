import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // references to the property 
  status: string = 'online';
  serverId: number =Math.floor(Math.random() * 11);
  serverName =['Test Server'];
  serverCreated= false;
  

  getstatus(){
      return this.status;
  }

  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      return this.allowNewServer = true;
    }, 3000);
   }

  ngOnInit(): void {
  }

  onServerCreate(){
    this.serverCreated = true;
  }

  onUpdateServerName(event: any){
    this.serverName.push((<HTMLInputElement>event.target).value);
    console.log(event);
  }

  getColor(){
    return this.serverId >= 5 ? 'green' : 'red';
  }
}
