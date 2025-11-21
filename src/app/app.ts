import { AfterViewInit, Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { TitleCasePipe } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Header,TitleCasePipe,NgFor, ReactiveFormsModule,HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit, AfterViewInit {
  @ViewChild('tempButton') buttontemp!: ElementRef;
  protected title = 'employeecrud';

  employeeForm: FormGroup

  educationOptions=[
    '10th Pass',
    'diploma',
    'graduate',
    'Post g;raduate',
    'phD'
  ];

  constructor(private fb: FormBuilder) {
    this.employeeForm = fb.group({});
  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstname: this.fb.control(''),
      lastname: this.fb.control(''),
      birthdate: this.fb.control(''),
      gender: this.fb.control(''),
      education: this.fb.control('default'),
      company: this.fb.control(''),
      jobExperience: this.fb.control(''),
      salary: this.fb.control('')
    })
  }

  ngAfterViewInit(): void {
    this.buttontemp.nativeElement.click();
  }
}
