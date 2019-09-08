import { DataStore } from '../../../engine/utilities/data-store';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit {
  constructor(public router: Router, private http: HttpClient, private fb: FormBuilder, ) {
  }

  ngAfterViewInit() {// set the first nav item as active
    var dis = $(".list-wrap li").eq(0);
    
    // align the wave
    align(dis);
    
    // align the wave on click
    $(".list-wrap li").click(function(){
      dis = $(this);
      
      align(dis);
    });
    
    $('body').on('keydown',function(e){
        var code = e.keyCode || e.which;
      
        if(code == 9) {
          
          if(dis.is(':last-child')){
            $(".list-wrap li:nth-child(1)").trigger("click");
          }
          else{
            dis.next().trigger("click");
          }
          
        } 
    });
    
    $("body").keydown(function(e) {
      if(e.keyCode == 37) { // left
        $("#showroom").animate({
          left: "-=980"
        });
      }
      else if(e.keyCode == 39) { // right
        $("#showroom").animate({
          left: "+=980"
        });
      }
    });
    
    function align(dis){
      
      // get index of item
      var index = dis.index() + 1;
      
      // add active class to the new item
      $(".list-wrap li").removeClass("active");
      dis.delay(100).queue(function() {
        dis.addClass('active').dequeue();
      });
      
      
      // ▼ this is not necessary for the navigation ▼
      
      // set the background color
      // var color = dis.data('color');
      // $("body").css('background', color);
      
      // set the text
      // $(".page").text(dis.attr("title"));
    }}
}
