import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})
export class DragComponent{

  show1:boolean = false
  show2:boolean = false
  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    if(ev.target.id == 'drag1'){
      if(ev.target.offsetParent.id == 'div2'){
        this.show1 = false
      }else
      this.show1 = true;
    }else    if(ev.target.id == 'drag2'){
      if(ev.target.offsetParent.id == 'div2'){
        this.show2 = false
      }else
      this.show2 = true;
    }
    
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
}


