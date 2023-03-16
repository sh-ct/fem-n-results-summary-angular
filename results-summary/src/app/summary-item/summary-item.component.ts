import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary-item',
  templateUrl: './summary-item.component.html',
  styleUrls: ['./summary-item.component.scss']
})
export class SummaryItemComponent {

  @Input()
  title: string = '';

  @Input()
  icon: string = '';

  @Input()
  score: number;

  @Input()
  maxScore: number = 100;

  @Input()
  accentIndex: number = 1;

}
