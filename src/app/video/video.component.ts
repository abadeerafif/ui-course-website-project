import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor( private route: ActivatedRoute,private sanitized: DomSanitizer) { }
url:any=null
  ngOnInit(): void {
    this.url = this.route.snapshot.queryParams['video'];
  console.log(this.url)
  }
  getDocumentContentTrusted(){
    return this.sanitized.bypassSecurityTrustHtml(this.url);
  }
}
