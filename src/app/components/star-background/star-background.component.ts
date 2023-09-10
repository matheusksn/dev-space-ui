import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-star-background',
  templateUrl: './star-background.component.html',
  styleUrls: ['./star-background.component.scss']
})
export class StarBackgroundComponent implements OnInit {
  stars: any[] = [];

  
  ngOnInit(): void {
    for (let i = 0; i < 600; i++) { 
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const size = Math.random() * 2 + 0.5; 
      const opacity = Math.random() * 0.7 + 0.3; 
      this.stars.push({
        style: {
          left: x + 'px',
          top: y + 'px',
          width: size + 'px',
          height: size + 'px',
          opacity: opacity
        }
      });
    }
  }
}
