import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { TeacherService } from '../teacher.service';
import {faPencil, faTrash} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit{
faPencil = faPencil;
faTrash = faTrash;

courseLabel: Array<{value: String, label: String}> = [];
teachers: any[] = [];

constructor{
private teacherService: TeacherService;
private sharedService: SharedService;
}{}

async ngOnInit(): Promise<void>{
  await this.listTeachers();
  this.sharedService.getCourses().subscribe(course => this.courseLabel = course);
}

async listTeachers() : Promise<void>{
  this.teachers = await this.teacherService.get<any[]>({
  url: "http://localhost:3000/getAllTeachers",
  params: {}
  });
}

async delete(id: number): Promise<void> {
  if (confirm("Deseja deletar esse professor?")){
    await this.teacherService.delete<any>({
      url: 'http://localhost:3000/deleteTeacher/${id}',
      params: {

      }
    });
    await this.listTeachers();
  }
}

onConfirm(value: any){
  alert("value:" + value);
}

}
