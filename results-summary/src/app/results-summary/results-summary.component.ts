import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../results-service/results.service';
import { Result } from '../results-service/result.model';

@Component({
  selector: 'app-results-summary',
  templateUrl: './results-summary.component.html',
  styleUrls: ['./results-summary.component.scss']
})
export class ResultsSummaryComponent implements OnInit {

  results: Result[];

  constructor(private resultsService: ResultsService) { }

  ngOnInit(): void {
    this.results = this.resultsService.getResults();
  }

  get averageScore() {
    const scores: number[] = this.results
      .map(result => result.score)
    return Math.floor(scores
      .reduce((prev, curr) => prev + curr, 0) / scores.length
    )
  }

}
