import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, of} from "rxjs";

import { CourseService } from '../pages/course/course.service';
import { UserService } from '../pages/user/user.service';
import { from } from "rxjs";


export interface Params {
  [key: string]: any;
}


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  users: Array<{id: String; fist_name: String;}> = [];
  course: Array<{id: String; name: String, }> = [];
  http: any;

  getUser() Observable<any[]>{
    return this.http.get("http://localhost:3000/getAllUsers").pipe{
map( x=>{
  Object.values(x).map((_user))=>{
    let u = {value: _user.id, label: user.fist_name}
    this.users.push(u);
  })
  console.log(x);
  console.log(this.users);
  return this.users;

    }
)
)
    }
    
    getCourses(): Observable<any[]>{
      return.this.http.("http://localhost:3000/getAllCourses").pipe(
        map(
          x => {
            Object.values(x).map((_corse)) => {
              let c = {value: _course.id, label_course.name}
              this.courses.push(c);
            }
          }

          console.log(x)
          console.log(this.course);
          return this.courses;
        )
      )
    }
  }

  userLabel: Array<{value: String, label: String}> = [];
  courseLabel: Array<{value: String, label: String}> = [];

  async convertUserToOption(): Promise<any[]>{
    this.users.forEach((user: {id: String, first_name: String;})=>{
      let u = {
        value: user.id.toString(),
        label: user.first_name
      }
      this.userLabel.push(u); 
    )};
    return this.userLabel
   }

  async convertCourseToOption(): Promise<any[]>{
    this.courses.forEach((course: {id: String, name: String;}) => {
      let c = {
        value: course.id.toString(),
        label: course.name
      }
      this.courseLabel.push(c),

    });
    return this.courseLabel;
  }

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private courseService: CourseService
  ) { }
}
