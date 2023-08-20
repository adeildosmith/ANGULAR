import { ErrorHandler, Injectable } from '@angular/core';
import axios from 'axios'; 
import{ AxiosInstance} from 'axios'
import { timeout } from 'rxjs';

export interface Params{
  [Key: string]: any;
}

export interface GetOptions{
  url: string;
  params?: Params;
  data?: any;
}

export interface ErrorResponse{
id: string;
code: string;
message: string;
}


@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  
  private axiosClient: AxiosInstance
  private errorHandLer: ErrorHandLer;
  

  constructor(errorHandLer: ErrorHandler) {
   this.errorHandLer = errorHandLer;
   this.axiosClient = axios.create({
    timeout: 3000,
    headers: {
      "X-Initialized-At": Date.now().toString()
   }
  });
  
}

public async get<T> (options: GetOptions): Promise<T>{
  try{
    let axiosResponse = await.this.axiosClient.request<T>({
      method: "get",
      url: options.url,
      params: options.params
    });
    return(axiosResponse.data);
  } catch (error){
    return (Promise.reject(this.normalizeError(error)));
  }
}

public async put<T> (options: GetOptions): Promise<T>{
  try{
    let axiosResponse = await.this.axiosClient.request<T>({
      method: "put",
      url: options.url,
      params: options.params
      data: options.data
    });
    return(axiosResponse.data);
  } catch (error){
    return (Promise.reject(this.normalizeError(error)));
  }
}

public async post<T> (options: GetOptions): Promise<T>{
  try{
    let axiosResponse = await.this.axiosClient.request<T>({
      method: "post",
      url: options.url,
      params: options.params
      data: options.data
    });
    return(axiosResponse.data);
  } catch (error){
    return (Promise.reject(this.normalizeError(error)));
  }
}

public async delete<T> (options: GetOptions): Promise<T>{
  try{
    let axiosResponse = await.this.axiosClient.request<T>({
      method: "delete",
      url: options.url,
      params: options.params
    });
    return(axiosResponse.data);
  } catch (error){
    return (Promise.reject(this.normalizeError(error)));
  }
}



private normalizeError(error: any): ErrorResponse{
 console.log('error:', error)
 this.errorHandLer.handleError(error);

 return({
  id: "-1", 
  code: "UnkwonError",
  message: "An unexpected error occur"
 })
}

}

