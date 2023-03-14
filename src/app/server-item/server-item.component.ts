import { Component, Input } from '@angular/core';
import { ServerItem } from 'src/model/mainModel';

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.scss']
})
export class ServerItemComponent {
  @Input() item: ServerItem = new ServerItem();
}
