import {Injectable} from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const baseUrl = `${environment.base_url}/resources`;
const headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable()
export class ResourcesService {

    constructor(private http: HttpClient) { }

    getResourceSpecs(): Promise<any> {
        return this.http.get(baseUrl,  {headers})
            .toPromise()
            .catch(e => Promise.reject(e.error.errors));
    }

    newResource(resource) {
        return this.http.post(baseUrl, resource,  {headers})
            .toPromise()
            .catch(e => Promise.reject(e.error.errors));
    }

    editResource(resource) {
        return this.http.put(baseUrl, resource,  {headers})
            .toPromise()
            .catch(e => Promise.reject(e.error.errors));
    }

    newStock(stockList) {
        const stock = {list: stockList};
        return this.http.post(baseUrl + '/stock', stock,  {headers})
            .toPromise()
            .catch(e => Promise.reject(e.error.errors));
    }

    currentStock() {
        return this.http.get(baseUrl + '/stock/last',  {headers})
            .toPromise()
            .then((stock: any) => {
                stock.list = JSON.parse('[' + stock.list + ']');
                return stock;
            })
            .catch(e => Promise.reject(e.error.errors));
    }

    newManufacture(manufacture) {
        return Promise.resolve(manufacture);
        /*
        return this.http.post(baseUrl + '/manufacture', manufacture,  {headers})
            .toPromise()
            .catch(e => Promise.reject(e.error.errors));
         */
    }
}
