import {Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'my-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit,AfterViewInit {

  @ViewChild('canvas') canvasRef: ElementRef;
  @ViewChild('video') videoRef: ElementRef;
  @ViewChild('photo') photoRef: ElementRef;

  @Input() photoWidth: number = 300;

  @Output() onNewPhoto = new EventEmitter<any>();

  private photo;
  private canvas;
  private video;
  private photoHeight: number;
  private streaming: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.canvas = this.canvasRef.nativeElement;
    this.photo = this.photoRef.nativeElement;
    this.video = this.videoRef.nativeElement;
    this.linkCameraStreamToVideo();
    this.clearPhoto();
  }

  linkCameraStreamToVideo() {
    let self = this;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({video: true})
        .then(stream => {
          this.video.src = window.URL.createObjectURL(stream);
          this.video.play();
          this.video.addEventListener('canplay', function () {
            if (!this.streaming) {
              self.resizeCanvasAndVideo();
              self.streaming = true;
            }
          }, false);
        })
    }
  }

  /*
   Called after video is initialized
   */
  resizeCanvasAndVideo() {
    this.photoHeight = this.video.videoHeight / (this.video.videoWidth / this.photoWidth);
    console.log('computed photo height: ' + this.photoHeight);
    this.video.setAttribute('width', this.photoWidth);
    this.video.setAttribute('height', this.photoHeight);
    this.canvas.setAttribute('width', this.photoWidth);
    this.canvas.setAttribute('height', this.photoHeight);
    this.photo.setAttribute('width', this.photoWidth);
    this.photo.setAttribute('height', this.photoHeight);
  }

  takePhotoClicked() {
    this.takePicture();
  }

  takePicture() {
    var context = this.canvas.getContext('2d');
    if (this.photoWidth && this.photoHeight) {
      this.canvas.width = this.photoWidth;
      this.canvas.height = this.photoHeight;
      context.drawImage(this.video, 0, 0, this.photoWidth, this.photoHeight);

      var data = this.canvas.toDataURL('image/png');
      this.onNewPhoto.emit(data);
      var img = new Image();
      img.setAttribute('src', data);
      this.photo.setAttribute('src', data);
    } else {
      this.clearPhoto();
    }
  }

  clearPhoto() {
    var context = this.canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    var data = this.canvas.toDataURL('image/png');
    this.photo.setAttribute('src', data);
  }


}
