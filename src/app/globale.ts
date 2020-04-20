import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Urls } from './urls';

@Injectable({ providedIn: 'root' })

export class Globals {
    constructor(private http: HttpClient, private router: Router) {}

    bitcoinStatus(){
        return new Promise( res => {
            this.http.get(Urls.baseURL + '/api/block')
            .subscribe( response => {
                res(response['btcData']);
            });
        });
    }
}