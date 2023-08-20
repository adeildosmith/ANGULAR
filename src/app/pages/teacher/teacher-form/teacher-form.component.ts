import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormlyFieldConfig} from 'ngx-formly/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../teacher.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent {
teacher: any = {};
form = new FormGroup({});
model: any = {};

fields: FormlyFieldConfig[] = [{
  className: 'd-Flex align-content-center justify-content-center',
  fieldGroupClassName: 'row',
  fielGroup: [
    {
      Key: 'name',
      type: 'input',
      props: {
        label:'name',
        placeholder: 'Nome do Professor',
        required: true,
      },
    },
    {
      key: 'course-id',
      type: 'input',
      props: {
        label: 'Numero do Curso',
        placeholder: 'Numero do Curso',
        required: true,
      },
    }
  ]
}
];

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private teacherService: TeacherService,
  private sharedService: SharedService

){
this.route.queryParams.subscribe(async(params: any) => {
 if(params.id !==undefined && params.id!== null) {
  this.teacher = await this.teacherService.get<any>({
    url: 'http://localhost:3000/teacher/${params.id}',
    params: {

    }
  });
  this.model = this.teacher;
 } else{
  this.model = {}
 }
});
}
async on onSubmit(): Promise <void> {
if (this.form.valid){
  if (this.model?.id !== undefined && this.model?.id !==null){
    this.teacher = await this.teacherService.put<any>({
    url: 'http://localhost:3000/updateTeacher/${this.model?.id}', 
    params: {

    },
    data: this.model
    });
  } else {
    delete this.model?.id;
    await this.teacherService.post<any>({
      url: 'http://localhost:3000/addTeacher',
      params: {

      }
      data: this.model
    });
  }
}
await this.router.navigate(['/teachers']);
}
}


