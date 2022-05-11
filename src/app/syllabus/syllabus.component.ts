import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CourseDataService } from '../course-data.service';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css'],
})
export class SyllabusComponent implements OnInit {
  readMore = false;
  constructor(private route: Router, private courseData: CourseDataService) {}

  content: any[] = [];
  vidCount = 0;
  readCount = 0;
  public selectedReadings: any[] = [];
  public selectedVideos: any[] = [];
  ngOnInit(): void {
    this.content = this.courseData.content;
    this.vidCount = this.content.filter((obj) => obj.type == 'video').length;
    this.readCount = this.content.filter(
      (obj) => obj.type == 'readings'
    ).length;

    this.selectedReadings = this.data.courseReadings.map((reading: any) => ({
      selected: false,
      reading,
    }));
    this.selectedVideos = this.data.courseVideos.map((video: any) => ({
      selected: false,
      video,
    }));

    console.log(this.selectedVideos);
  }

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete =
      this.content != null && this.content.every((t) => t.completed);
  }
  @Input() data: any = null;

  goto(simple_route: string, video: string) {
    console.log(simple_route, video);
    this.route.createUrlTree([
      simple_route,
      { my_object: JSON.stringify(video) },
    ]);
  }
  navigateToQuiz() {
    this.route.navigateByUrl('/quiz/' + this.data.courseName);
  }
  math(number: number) {
    return Math.ceil(number);
  }
  checkIfAllComplete(){
    if(this.allComplete)return 
    for(let i =0;i<this.selectedVideos.length;i++){
      if(!this.selectedVideos[i].selected){
        this.allComplete=false;
        return
      }
    }
    for(let i =0;i<this.selectedReadings.length;i++){
      if(!this.selectedReadings[i].selected){
        this.allComplete=false;
        return
      }
    }
    this.allComplete=true;
  }
  parentSelectorVideos: boolean = false;
  updateSelectedVideos($event: any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;

    this.selectedVideos = this.selectedVideos.map((d) => {
      if (d.video === id) {
        d.selected = isChecked;
        this.parentSelectorVideos = false;
        return d;
      }
      if (id == -1) {
        d.selected = this.parentSelectorVideos;
        return d;
      }
      return d;
    });
    this.checkIfAllComplete()
    console.log(this.selectedVideos)
  }
  parentSelectorReadings: boolean = false;
  updateSelectedReadings($event: any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;

    this.selectedReadings = this.selectedReadings.map((d) => {
      if (d.reading === id) {
        d.selected = isChecked;
        this.parentSelectorReadings = false;
        return d;
      }
      if (id == -1) {
        d.selected = this.parentSelectorReadings;
        return d;
      }
      return d;
    });
    this.checkIfAllComplete()
    console.log(this.selectedReadings);
  }
}
