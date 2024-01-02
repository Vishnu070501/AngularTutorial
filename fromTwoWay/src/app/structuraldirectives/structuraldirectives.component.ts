import { Component } from '@angular/core';

@Component({
  selector: 'app-structuraldirectives',
  templateUrl: './structuraldirectives.component.html',
  styleUrls: ['./structuraldirectives.component.css']
})
export class StructuraldirectivesComponent {

  Employee:any=[
    {
      empId:100,
      empName:'Vishnu Kurup',
      place: 'Delhi'
    },
    {
      empId:101,
      empName:'Arjun Kurup',
      place: 'Faridabad'
    },
    {
      empId:102,
      empName:'Rahul Kurup',
      place: 'Ropar'
    }

  ]

  status:boolean = true;
  changeStatus(){
    this.status = this.status?false:true;
  }

  today = new Date();

  role: string = '';
}
