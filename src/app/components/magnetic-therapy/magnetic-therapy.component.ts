import { Component } from '@angular/core';
import { IData } from 'src/app/models/data.inteface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-magnetic-therapy',
  templateUrl: './magnetic-therapy.component.html',
  styleUrls: ['./magnetic-therapy.component.scss']
})
export class MagneticTherapyComponent {
  data: IData | null = null;

  constructor(private apiService: ApiService) {
    this.apiService.getData().subscribe( (data: IData) => {
      this.data = data;
    });
  }

}
