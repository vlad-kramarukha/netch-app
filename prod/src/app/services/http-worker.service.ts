import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpWorkerService {

  private url = 'http://netch-env-1.eba-2jpxc2x7.eu-central-1.elasticbeanstalk.com'
  private headers = {
    headers: new HttpHeaders({
      Authorization: this.getLocal() as string,
    }),
  }

  constructor(private http: HttpClient) {}

  public getProgress() {
    return this.http.get(`${this.url}/admin/api/progress`, this.headers)
  }

  public getActiveBriefs() {
    return this.http.get(`${this.url}/admin/api/briefs/active`, this.headers)
  }

  public removeBrief(id: number) {
    return this.http.delete(`${this.url}/admin/api/briefs/${id}`, this.headers)
  }

  public getTextContentAll() {
    return this.http.get(`${this.url}/api/front/allText`)
  }

  public getTextContent(name: string) {
    return this.http.get(`${this.url}/api/front/textContent/${name}`)
  }

  public postTextContent(options: any) {
    return this.http.post(`${this.url}/admin/api/textContent/add`, options, this.headers)
  }

  public removeTextContent(id: number) {
    return this.http.delete(`${this.url}/admin/api/textContent/${id}`, this.headers)
  }

  public getFeedback() {
    return this.http.get(`${this.url}/admin/api/feedback`, this.headers)
  }

  public postFeedback(options: any) {
    return this.http.post(`${this.url}/api/feedback`, options)
  }

  public getImages(name: any) {
    return this.http.get(`${this.url}/api/front/imageContent/${name}`, this.headers)
  }

  public postImages(options: any) {
    return this.http.post(`${this.url}/admin/api/imageContent/add`, options, this.headers)
  }

  public removeImages(id: number) {
    return this.http.delete(`${this.url}/admin/api/imageContent/${id}`, this.headers)
  }

  public postRegistration(options: any) {
    return this.http.post(`${this.url}/api/registration`, options)
  }

  public postLogin(options: any) {
    return this.http.post(`${this.url}/login`, options, {observe: 'response'})
  }

  public setLocal(token: string) { localStorage.setItem('JWT_TOKEN', token) }
  public getLocal() { return localStorage.getItem('JWT_TOKEN') }

}
