import {Injectable} from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const baseUrl = `${environment.base_url}/person`;
const headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable()
export class PersonService {

    constructor(private http: HttpClient) { }

    newPerson(person) {
        return this.http.post(baseUrl, person,  {headers})
            .toPromise()
            .catch(e => Promise.reject(e.error.errors));
    }

    editPerson(person) {
        return this.http.put(baseUrl, person,  {headers})
            .toPromise()
            .catch(e => Promise.reject(e.error.errors));
    }

    deletePerson(person) {
        return this.http.delete(`${baseUrl}/${person._id}`,  {headers})
            .toPromise()
            .catch(e => Promise.reject(e.error.errors));
    }

    getPeople(): Promise<any> {
        return this.http.get(baseUrl,  {headers})
            .toPromise()
            .catch(e => Promise.reject(e.error.errors));
    }
}
