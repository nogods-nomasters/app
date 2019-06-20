import { Component, OnInit } from '@angular/core';
import { ClassificationService } from '../services/context/classification.service';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {

  constructor(private classificationService: ClassificationService) { }

  nodes: any = null;

  ngOnInit() {

    this.nodes = this.classificationService.getNodes();

  }

}
