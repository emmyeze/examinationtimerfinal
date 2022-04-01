import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defaultsidenav',
  templateUrl: './defaultsidenav.component.html',
  styleUrls: ['./defaultsidenav.component.scss']
})
export class DefaultsidenavComponent implements OnInit {
  sideNavOpen = true;
  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }

}
