import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
    validatorEnable(){
      var d1=((document.getElementById("nombre") as HTMLInputElement).value);
      var d2=((document.getElementById("edad") as HTMLInputElement).value);
      var d3=((document.getElementById("genero") as HTMLInputElement).value);
      var d4=((document.getElementById("pais") as HTMLInputElement).value);
      var d5=((document.getElementById("estado") as HTMLInputElement).value);
      var v=0;
      if(d1==null){
        v++;
      }
      if(d2==null){
        v++;
      }
      if(d3==null){
        v++;
      }
      if(d4==null){
        v++;
      }
      if(d5==null){
        v++;
      }
      if(v==0){
        var btn=<HTMLInputElement> document.getElementById("button");
        btn.disabled=true;
      }else{
        var btn=<HTMLInputElement> document.getElementById("button");
        btn.disabled=true;
      }
        var w1=<HTMLElement>document.getElementById("nombre");
        w1.addEventListener('keyup',this.validatorEnable);
        var w2=<HTMLElement>document.getElementById("edad");
        w2.addEventListener('keyup',this.validatorEnable);
        var w3=<HTMLElement>document.getElementById("genero");
        w3.addEventListener('keyup',this.validatorEnable);
        var w4=<HTMLElement>document.getElementById("pais");
        w4.addEventListener('change',this.validatorEnable);
        var w5=<HTMLElement>document.getElementById("estado");
        w5.addEventListener('change',this.validatorEnable);

        var done=<HTMLElement>document.getElementById("button");
        done.addEventListener('click',()=>{
          alert("campos llenados");
        })

    }
 

  constructor() { }

  ngOnInit(): void {
  }

}
