import { Component } from "@angular/core";

@Component({
    selector: "app-selector",
    templateUrl: "./mainComp.component.html",
    styleUrls: ["./mainComp.component.css"]
})

export class my_app_selector
{
    this_is_variable = "thisis somethin";
    buttonIsDisabled = true;
    inputIsDisabled = true;
    inputValue = '';
    
    constructor()
    {
        setTimeout(() => {
            this.buttonIsDisabled = false;
        }, 2000);
    }
    activateInput()
    {
        this.inputIsDisabled = false;
    }
}