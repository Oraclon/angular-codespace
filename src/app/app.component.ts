import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServerItem, Counters } from 'src/model/mainModel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-codespace';
  ServerItems: Array<ServerItem> = [];
  ServersCounter: number = 0;
  BlueprintsCounter: number = 0;

  @Output() ServersCounterSignal = new EventEmitter<number>();
  @Output() BlueprintsCounterSignal = new EventEmitter<number>();

  SaveServer(item: ServerItem)
  {
    item.server_id = this.ServersCounter += 1;
    this.ServerItems.push(item);
    this.ServersCounterSignal.emit(this.ServersCounter);
  }
  SaveBlueprint(item: ServerItem)
  {
    item.server_id = this.BlueprintsCounter += 1;
    this.ServerItems.push(item);
  }
  DeleteAll(trigger: boolean)
  {
    this.ServerItems = [];
    this.ServersCounter = 0;
    this.BlueprintsCounter = 0;
  }
}
