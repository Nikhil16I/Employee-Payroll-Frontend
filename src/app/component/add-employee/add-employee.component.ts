import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { DataService } from 'src/app/service/data.service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  public employee: Employee = new Employee();
  employeeFormGroup: FormGroup;

  departments: Array<any> = [
    {
      id: 1,
      name: "HR",
      value: "HR",
      checked: false
    },
    {
      id: 2,
      name: "Sales",
      value: "Sales",
      checked: false 
    },
    {
      id: 3,
      name: "Finance",
      value: "Finance",
      checked: false  
    },
    {
      id: 4,
      name: "Engineer",
      value: "Engineer",
      checked: false
    },
    {
      id: 5,
      name: "Other",
      value: "Other",
      checked: false 
    }
  ]

  constructor(private formBuilder: FormBuilder, 
    private httpService: HttpService, 
    private router: Router,
    private dataService: DataService, 
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar) {
      this.employeeFormGroup = this.formBuilder.group({
        name: new FormControl('', [Validators.required, Validators.pattern("^[A-Z][a-zA-Z\\s]{2,}$")]),
        profilePic: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        department: this.formBuilder.array([], [Validators.required]),
        salary: new FormControl('', [Validators.required]),
        startDate: new FormControl('', [Validators.required]),
        note: new FormControl('', [Validators.required]) 
      })
    }

    ngOnInit(): void {
      console.log(this.employee);
    }
  
     onCheckboxChange(event: MatCheckboxChange) {
      const department: FormArray = this.employeeFormGroup.get('department') as FormArray;
  
      if (event.checked) {
        department.push(new FormControl(event.source.value));
      } else {
        const index = department.controls.findIndex(x => x.value === event.source.value);
        department.removeAt(index);
      }
    }
  
     onSubmit(){
      this.employee = this.employeeFormGroup.value;
      // console.log(this.employeeFormGroup);
      console.log(this.employee);
      this.httpService.addEmployee(this.employee).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl("/home-page");
      });
    }
  
  }