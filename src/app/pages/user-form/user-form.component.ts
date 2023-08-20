import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {ActivatedRoute, Router } from '@angular/router';
import {UserService} from '../user/user.service';
import { HttpClient } from '@angular/common/http';

export const GENDERS =[
  {label: 'Homem', value; 'male'},
  {label: 'Mulher', value; 'feme'},
  {label: 'Outro', value; other};
];

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: any = {};
  model: any = {};
  form: new FormGroup({});

  fields: FormlyFieldConfig[] = [
    {
      className: 'd-flex align-content-center justify-content-center',
      fielGroupClassName: 'row',
      fielGroup: [
        {
          key: 'first_name',
          type: 'imput',
          props: {
            label: 'name',
            placeHolder: 'Primeiro Nome',
            required: true,
          },
        },
        {
          key: 'last_name',
          type: 'imput',
          props: {
            label: 'sobrenome',
            placeHolder: 'Nome do Familia',
            required: true,

          },
        },
        {
          key: 'email',
          type: 'select',
          props: {
            label: 'Genero',
            placeHolder: 'Genero',
            required: true,
            options: GENDERS,
          },
        }, 
      ]
    }
  ];

  constructor(
    private router: ActivatedRoute,
    private router: Router,
    private UserService: UserService,
    private http: HttpClient
  )(
    this.route.queryParams.subscribe(async(params: any) =>{
      if (params.id ! == undefined && params.id !== null){
        this.user = await this.userService.get<any>({
          url: 'http://localhost:3000/users/${params.id}',
          params: {

          }
        });
        this.model = this.user; 
      } else{
        this.model = {}
      }

    });
  )
async onSubmit(): Promise<void>{

  if (this.form.valid){
    if(this.model?.id) !== undefined && this.model?.id! == null){
      this.user = await this.userService.put<any>({
        url: 'http://localhost:3000/updateUsers/${this.model?.id}',
        params: {
        },
        data: this.model
      });
    } else{
      delete this.model?.id;
      await this.userService.post<any>({
        url: 'http://localhost:3000/addUser',
        params: {

        },
        data: this.model
      });
    }
  }
  await this.router.navigate(['/users']);
}
}
