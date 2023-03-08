import { Component } from "@angular/core";
@Component({
  selector: "app-nasSecond",
  templateUrl: "./nasSecond.component.html",
  styleUrls: ['./nasSecond.component.css']
})

export class NasSecondComponent
{
  PIsEnabled: boolean = true;
  ClearButtonIsEnabled: boolean = true;
  logs: Array<number> = []
  ToggleTitle()
  {
    this.PIsEnabled = false;
    this.ClearButtonIsEnabled = false;
    for(let i=0; i<=15; i++)
    {
      this.logs.push(i);
    }
  }
  ClearLog()
  {
    this.logs.splice(0);
  }

}
