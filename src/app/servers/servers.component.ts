import { Component } from '@angular/core';

type Server = {
  id: number;
  name: string;
  status: string;
  statusId: number;
};

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent {
  serverName = '';
  status = Object.freeze({
    0: 'Offline',
    1: 'Online',
  });
  servers: Server[] = [];

  createServer() {
    this.servers.push({
      id: Math.round(Math.random() * 100),
      name: this.serverName,
      statusId: 1,
      status: this.status[1],
    });

    this.serverName = '';
  }

  deleteServer(id: number) {
    console.log(id);
    const newServers = this.servers.filter((server) => server.id !== id);
    this.servers = newServers;
  }
}
