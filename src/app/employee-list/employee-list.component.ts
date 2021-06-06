import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : Employee[];
  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit() :void{
    this.getEmployees();
}

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;});
   }

  private updateEmployee(id:number){
    this.router.navigate(['update-employee',id]) ;
  }

  private deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      console.log(data);
      this.getEmployees();
    })
  }

  private employeeDetails(id:number){
    this.router.navigate(['employee-details',id]);
  }

}
