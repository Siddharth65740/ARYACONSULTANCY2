import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EmployeeService} from "../employee.service";
import {SRO_OVERVIEW} from "../employee";

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  empforRef=new FormGroup({
    FTTH_CONN:new FormControl(),
    status:new FormControl(),
    remark:new FormControl()
  })
  msg:string="";
  constructor(public empservice:EmployeeService) { }

  ngOnInit(): void {
  }

  addbtnclicked()
  {
    let empform=this.empforRef.value;
    let newemp=new SRO_OVERVIEW(empform.FTTH_CONN,empform.status,empform.remark)
    this.empservice.savedata(newemp).subscribe(data=>this.msg=JSON.parse(data),error => {
    this.msg="error in frontend"
      console.log(error);
    })
    this.empforRef.reset();
  }

}

