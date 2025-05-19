import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [NgIf, NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  decision = true
  weight = 251
  tv = 'markyza'

  members = [
    {
      id: 'uuid1',
      name: 'Karel',
      dateOfBirth: '22.11.1990'
    },
    {
      id: 'uuid2',
      name: 'Petr',
      dateOfBirth: '22.11.1970'
    }
  ]

  trackByMemberId(index: number, member: any): string {
    return member.id;
  }

}
