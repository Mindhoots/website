import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-component',
  imports: [],
  templateUrl: './nav-bar-component.html',
  styleUrl: './nav-bar-component.css',
})
export class NavBarComponent {

  showMenu = false;


  toggleMenu(toOpen: boolean) {
    console.log("toggle clicked", toOpen);
    // let menu: any = document.getElementById('menu');
    // if (menu.classList.contains('hidden')) {
    //   menu.classList.remove('hidden')
    // } else {
    //   menu.classList.add('hidden')
    // }
    let navMenu: any = document.getElementById("nav-menu");
    if (toOpen) {
      navMenu.classList.toggle("block")
    } else {
      navMenu.classList.toggle("left-[-100%]")
    }

  }



}
