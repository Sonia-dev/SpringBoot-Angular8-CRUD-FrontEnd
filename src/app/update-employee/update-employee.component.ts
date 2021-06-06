import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

    id:number;
  employee:Employee=new Employee();
  constructor(private employeeservice:EmployeeService ,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {

    this.id=this.route.snapshot.params['id'];
    this.employeeservice.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    },error=>console.log(error));}

    onSubmit(){
      this.employeeservice.updateEmployee(this.id,this.employee).subscribe(data=>
        {
          this.goToEmployeeList();
        }, error=>console.log(error));
        
    }

    goToEmployeeList(){
      this.router.navigate(['/employees']);
    }
  
}
