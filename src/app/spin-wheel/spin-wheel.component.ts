import {Component, ElementRef, Input, ViewChild,OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'spin-wheel',
  templateUrl: './spin-wheel.component.html',
  styleUrls: ['./spin-wheel.component.css']
})
export class SpinWheelComponent implements OnInit,AfterViewInit {

  @ViewChild('canvas') canvasRef: ElementRef;
  @Input() width: number = 300;
  @Input() height: number = 300;
  @Input() sliceColors: string[] = ['#e7e5e5', '#c3bebe', '#e7e5e5', '#c3bebe', '#e7e5e5', '#c3bebe','#e7e5e5', '#c3bebe'];
  private degreeOfSlice: number;
  private deg: number;


  private canvas: any;

  constructor() {
  }

  ngOnInit() {
    console.log('wheel of fortune props: ' + 'width: ' + this.width + ' height: ' + this.height);
  }

  ngAfterViewInit() {
    this.canvas = this.canvasRef.nativeElement;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.degreeOfSlice = 360/this.sliceColors.length;
    this.deg = 0;
    this.draw();
  }

  deg2rad(deg) {
    return deg * Math.PI/180;
  }

  drawSlice(context,center , deg, color) {
    context.beginPath();
    context.fillStyle = color;
    context.moveTo(center, center);
    context.arc(center, center, this.width / 2, this.deg2rad(deg), this.deg2rad(deg + this.degreeOfSlice));
    context.lineTo(center, center);
    context.fill();
  }

  draw() {
    console.log('draw');
    if (this.canvas.getContext) {
      const c = this.canvas.getContext('2d');

      //fill in the background
      c.fillStyle = "#e70a0a";
      c.fillRect(0, 0, this.width, this.height);
      for(let i = 0;i<this.sliceColors.length;i++){
        this.drawSlice(c,this.width/2,this.deg,this.sliceColors[i]);
        this.deg += this.degreeOfSlice;
      }
    }
  }


}
