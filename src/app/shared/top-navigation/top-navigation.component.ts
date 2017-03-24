import {Component} from "@angular/core"
@Component({
    selector:"app-top-navigation",
    templateUrl:"./top-navigation.component.html",
    styleUrls: ['./top-navigation.component.css']
})

export class TopNavigationComponent {
  selected = '';
  items = [
    {text: 'Refresh'},
    {text: 'Settings'},
    {text: 'Help', disabled: true},
    {text: 'Sign Out'}
  ];

  iconItems = [
    {text: 'Redial', icon: 'dialpad'},
    {text: 'Check voicemail', icon: 'voicemail', disabled: true},
    {text: 'Disable alerts', icon: 'notifications_off'}
  ];

  select(text: string) { this.selected = text; }
}

