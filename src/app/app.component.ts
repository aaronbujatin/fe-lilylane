import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'fe-lilylane';

  ngOnInit(): void {
    initFlowbite();
    AOS.init();
  }
}
