import { Component } from "@angular/core";

@Component({
  selector: "app-nas-comp",
  templateUrl: "./nas-comp.component.html"
})

export class NasCompComponent
{
  message = "something"
  buttonIsDisabled = true;
  constructor()
  {
    setTimeout(()=>{
      this.buttonIsDisabled=false;
    }, 2000)
  }
  doAction()
  {
    alert("message")
  }
}
