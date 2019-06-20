import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../app-config-service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  private apiBaseUrl: string;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.apiBaseUrl = this.appConfigService.apiBaseUrl;
  }



  async getNodes() {
    return await this.http.get<Node[]>(this.apiBaseUrl + '/classification/nodes', {  })
      .pipe(map(Nodes => Nodes));
  }

}
