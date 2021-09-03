import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataManagementService } from 'src/app/services/data-management.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(private datas: DataManagementService, private cdRef:ChangeDetectorRef,) { }

  ngOnInit(): void {
  }
}
