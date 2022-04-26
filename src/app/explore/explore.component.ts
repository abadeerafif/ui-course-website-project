import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goto(simple_route:string) {
    console.log(simple_route);
    this.route.navigateByUrl(simple_route);
  }
  
}
