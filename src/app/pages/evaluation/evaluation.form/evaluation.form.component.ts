import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormlyFieldConfig} from 'ngx-formly/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvaluationService } from '../evaluation.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.css']
})
export class EvaluationFormComponent {
evaluation: any = {};
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
  private evaluationService: EvaluationService,
  private sharedService: SharedService

){
this.route.queryParams.subscribe(async(params: any) => {
 if(params.id !==undefined && params.id!== null) {
  this.evaluation = await this.evaluationService.get<any>({
    url: 'http://localhost:3000/evaluation/${params.id}',
    params: {

    }
  });
  this.model = this.evaluation;
 } else{
  this.model = {}
 }
});
}
async on onSubmit(): Promise <void> {
if (this.form.valid){
  if (this.model?.id !== undefined && this.model?.id !==null){
    this.evaluation = await this.evaluationService.put<any>({
    url: 'http://localhost:3000/updateEvaluation/${this.model?.id}', 
    params: {

    },
    data: this.model
    });
  } else {
    delete this.model?.id;
    await this.evaluationService.post<any>({
      url: 'http://localhost:3000/addEvaluation',
      params: {

      }
      data: this.model
    });
  }
}
await this.router.navigate(['/evaluations']);
}
}


