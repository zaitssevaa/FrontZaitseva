import { Component, OnInit  } from '@angular/core';
import {IAgency} from "./agency";
import {AgencyService} from "./agency.service";


@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {
  public agencys: IAgency[] = [];
  viewType: string = 'table';
  public searchTerm: string = '';


  constructor(private _agencyservice: AgencyService) {}

  ngOnInit(): void  {
    this._agencyservice.getAgency().subscribe(data => this.agencys = data)
  }

  searchAgency(): void {
    if(this.searchTerm.trim()) {
      this._agencyservice.searchAgency(this.searchTerm).subscribe(data => this.agencys = data);
    }
  }
}
