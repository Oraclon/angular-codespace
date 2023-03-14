import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ServerItem } from 'src/model/mainModel';

@Component({
  selector: 'app-controler',
  templateUrl: './controler.component.html',
  styleUrls: ['./controler.component.scss']
})
export class ControlerComponent {
  @ViewChild('ServerName') server_name!: ElementRef;
  @ViewChild('ServerPrice') server_price!: ElementRef;
  @ViewChild('ServerContent') server_content!: ElementRef;

  @Output() ServerSignal = new EventEmitter<ServerItem>();
  @Output() BlueprintSignal = new EventEmitter<ServerItem>();
  @Output() DeleteSignal = new EventEmitter<boolean>();

  @Input() ServersCount!: number;
  @Input() BlurprintsCount!: number;

  ReturnValue(inputValue: ElementRef)
  {
    return inputValue.nativeElement.value;
  }
  ServerEmit()
  {
    const serverItem: ServerItem = new ServerItem();
    serverItem.server_name = this.ReturnValue(this.server_name);
    serverItem.server_price = this.ReturnValue(this.server_price);
    serverItem.server_cont = this.ReturnValue(this.server_content);
    serverItem.server_type = true;
    this.ServerSignal.emit(serverItem);
  }
  BlueprintEmit()
  {
    const serverItem: ServerItem = new ServerItem();
    serverItem.server_name = this.ReturnValue(this.server_name);
    serverItem.server_price = this.ReturnValue(this.server_price);
    serverItem.server_cont = this.ReturnValue(this.server_content);
    serverItem.server_type = false;
    this.BlueprintSignal.emit(serverItem);
  }
  DeleteEmit()
  {
    this.DeleteSignal.emit(true);
  }
}
