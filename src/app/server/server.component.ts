import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'server-item',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent {
  @Input() server: {
    name: string;
    id: number;
    status: string;
    statusId: number;
  };

  toggleStatus() {
    this.server.statusId = this.server.statusId === 0 ? 1 : 0;
    this.server.status = this.server.statusId === 0 ? 'Offline' : 'Online';
  }

  @Output() deleteServer = new EventEmitter<number>();

  onDelete() {
    this.deleteServer.emit(this.server.id);
  }
}
