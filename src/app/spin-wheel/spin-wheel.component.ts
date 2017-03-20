import {Component, ElementRef, Input, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'spin-wheel',
  templateUrl: './spin-wheel.component.html',
  styleUrls: ['./spin-wheel.component.css']
})
export class SpinWheelComponent implements OnInit,AfterViewInit {

  @ViewChild('canvas') canvasRef: ElementRef;
  @Input() width: number = 300;
  @Input() height: number = 300;
  @Input() sliceColors: string[] = ['#e7e5e5', '#c3bebe', '#e7e5e5', '#c3bebe', '#e7e5e5', '#c3bebe', '#e7e5e5', '#c3bebe'];
  private degreeOfSlice: number;
  private deg: number;
  private rotationSpeed: number = 5;
  private spinTimer: any;
  private spinTimerSubscription: any;
  private spinTime: number = 0; //in ms

  private canvas: any;
  private simStep: number = 33;

  constructor() {
  }

  ngOnInit() {
    console.log('wheel of fortune props: ' + 'width: ' + this.width + ' height: ' + this.height);
  }

  ngAfterViewInit() {
    this.spinTimer = Observable.timer(0, this.simStep);
    this.canvas = this.canvasRef.nativeElement;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.degreeOfSlice = 360 / this.sliceColors.length;
    this.deg = 0;
    this.draw();
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  startTimer() {
    if (this.spinTime <= 0) {
      this.spinTimerSubscription = this.spinTimer.subscribe(task => this.animate());
      this.spinTime = this.randomIntFromInterval(2000, 10000);
      console.log('spintime: ' + this.spinTime);
    }
  }

  stopTimer() {
    this.spinTimerSubscription.unsubscribe();
  }

  animate() {
    window.requestAnimationFrame(rotate => this.rotateWheel());
    this.spinTime -= this.simStep;
    if (this.spinTime <= 0) {
      this.stopTimer();
    }
  }

  deg2rad(deg) {
    return deg * Math.PI / 180;
  }

  drawImage(context, deg, text) {
    let center = this.width / 2;
    context.save();
    context.translate(center, center);
    context.rotate(this.deg2rad(deg));
    context.textAlign = "right";
    context.fillStyle = "#fff";
    context.font = 'bold 30px sans-serif';
    context.fillText(text, 130, 10);
    context.restore();
  }

  drawSlice(context, center, deg, color) {
    context.beginPath();
    context.fillStyle = color;
    context.moveTo(center, center);
    context.arc(center, center, this.width / 2, this.deg2rad(deg), this.deg2rad(deg + this.degreeOfSlice));
    context.lineTo(center, center);
    context.fill();
  }

  rotateWheel() {
    this.deg += this.rotationSpeed;
    this.draw();
  }

  draw() {
    if (this.canvas.getContext) {
      const c = this.canvas.getContext('2d');

      //fill in the background
      c.fillStyle = "#e70a0a";
      c.fillRect(0, 0, this.width, this.height);
      for (let i = 0; i < this.sliceColors.length; i++) {
        this.drawSlice(c, this.width / 2, this.deg, this.sliceColors[i]);
        this.drawImage(c, this.deg + this.degreeOfSlice / 2, 'Philipp');
        this.deg += this.degreeOfSlice;
      }
    }
  }


}
