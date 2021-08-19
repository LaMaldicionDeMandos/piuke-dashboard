import {Injectable} from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const baseUrl = `${environment.base_url}/machines`;
const headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable()
export class MachinesService {

    constructor(private http: HttpClient) { }

    getElectricalCost(): Promise<any> {
        return this.http.get(baseUrl + '/electricalCost',  {headers})
            .toPromise()
            .then((cost: any) => cost.cost)
            .catch(e => Promise.reject(e.error.errors));
    }

    updateElectricalCost(newCost): Promise<any> {
        return this.http.put(baseUrl + '/electricalCost', {cost: newCost},  {headers})
            .toPromise()
            .then((cost: any) => cost.cost)
            .catch(e => Promise.reject(e.error.errors));
    }

    newMachine(machine) {
        return this.http.post(baseUrl, machine,  {headers})
            .toPromise()
            .catch(e => Promise.reject(e.error.errors));
    }

    editMachine(machine) {
        return this.http.put(baseUrl, machine,  {headers})
            .toPromise()
            .catch(e => Promise.reject(e.error.errors));
    }

    deleteMachine(machine) {
        return this.http.delete(`${baseUrl}/${machine._id}`,  {headers})
            .toPromise()
            .catch(e => Promise.reject(e.error.errors));
    }

    getMachines(): Promise<any> {
        return this.http.get(baseUrl,  {headers})
            .toPromise()
            .catch(e => Promise.reject(e.error.errors));
    }
}
