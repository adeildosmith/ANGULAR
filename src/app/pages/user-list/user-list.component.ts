import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { UserService } from '../user.service';
import {faPencil, faTrash} from '@fortawesome/free-solid-svg-icons';
import { GENDERS } from '../user-form/user-form.component';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
faPencil = faPencil;
faTrash = faTrash;

Users: any[] = [];

constructor{
private userService: UserService;

}{

}
async ngOnInit(): Promise<void>{
await this.listUsers(),  
}
async listUser(): Promise<void>{
  this.users = await this.userService.get<any[]>({
    url: "http://localhost:3000/getAllUsers",
    params: {

    }
  });
}

getLabelGender(value: string): string | underfined {
  let gender = GENDERS.find((gender)) => gender.value == value)
  return gender?.label;
}

async delete(id: number): Promise<void>{
  if (confirm("Deseja deletar esse usuário?")){
    await this.userService.delete<any>({
      url: 'http://localhost:3000/deleteUser/${id}',
      params: {}
    });
    await this.listUsers();
  }
}

onConfirm(value: any){
  alert("value:" + value);
}
}

