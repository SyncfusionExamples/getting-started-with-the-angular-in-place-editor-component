import { Component } from '@angular/core';
import { DatePickerModel } from '@syncfusion/ej2-angular-calendars';
import { DropDownListModel } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxModel } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';

  public genderData: string[] = ['Male', 'Female'];
  public listValue: string = "Male";
  public listObject: DropDownListModel = {
    dataSource: this.genderData,
    placeholder: 'Select a gender'
  };

  public dateValue: Date = new Date('07/12/2023');
  public datepickerObject: DatePickerModel = {
    placeholder : 'Select a date',
    showTodayButton : true
  };

  public textboxObject: TextBoxModel = {
    placeholder : 'Enter your name'
  };
  public textboxValue: string = "Andrew";

}
