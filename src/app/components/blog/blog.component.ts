import { Component } from '@angular/core';
import { IData } from 'src/app/models/data.inteface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  data: IData | null = null;

  constructor(private apiService: ApiService) {
    this.apiService.getData().subscribe( (data: IData) => {
      this.data = data;
    });
  }
}
