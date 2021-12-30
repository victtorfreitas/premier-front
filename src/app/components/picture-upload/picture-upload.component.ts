import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-picture-upload",
  templateUrl: "./picture-upload.component.html",
  styleUrls: ["./picture-upload.component.css"]
})
export class PictureUploadComponent implements OnInit, AfterViewInit {
  @Input() image!: string;

  file: any = {};
  imagePreviewUrl: any = {};
  @Output("file")
  imageUpload: EventEmitter<any>;

  @ViewChild("fileInput")
  fileInput!: ElementRef;

  constructor() {
    this.handleImageChange = this.handleImageChange.bind(this);
    this.imageUpload = new EventEmitter<unknown>();
  }

  ngOnInit() {
    console.log("Img: "+this.image);
    this.file = null;
    this.imagePreviewUrl =
      this.image !== undefined
        ? this.image
        : "assets/img/image_placeholder.jpg";
    // : "assets/img/image_placeholder.jpg";
  }

  handleImageChange($event: any) {
    $event.preventDefault();
    let reader = new FileReader();
    let file = $event.target.files[0];
    reader.onloadend = () => {
      this.file = file;
      this.imagePreviewUrl = reader.result;
      this.imageUpload.emit(this.file);
      // this.state.imagePreviewUrl1 = reader.result;
    };
    reader.readAsDataURL(file);
  }

  handleClick() {
    console.log(this.fileInput.nativeElement);
    this.fileInput.nativeElement.click();
  }

  handleRemove() {
    this.file = null;
    this.imagePreviewUrl =
      this.image !== undefined
        ? this.image
        : "assets/img/image_placeholder.jpg";
    // : "assets/img/image_placeholder.jpg";
    this.fileInput.nativeElement.value = null;
  }

  handleSubmit($event: any) {
    $event.preventDefault();
    // this.state.file is the file/image uploaded
    // in this function you can save the image (this.state.file) on form submit
    // you have to call it yourself
  }

  ngAfterViewInit(): void {
  }
}
