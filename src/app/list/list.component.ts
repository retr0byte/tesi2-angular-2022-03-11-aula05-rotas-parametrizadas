import { Component, OnInit } from '@angular/core';
import { listData } from '../list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  list = listData;

  constructor() {}

  ngOnInit() {}
}
