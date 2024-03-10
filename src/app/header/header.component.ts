import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { FileService } from '../services/file.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  /** Boolean to determine whether certain header items should be disabled if a file has not been uploaded. Updated by fileLoaded$ observable. */
  show: boolean = false;

  /** Subscription to FileService.fileLoaded$ observable.  */
  fileLoaded$: Subscription;

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    this.fileLoaded$ = this.fileService.fileLoaded$.subscribe(val => this.show = val);
  }

  ngOnDestroy(): void {
    this.fileLoaded$.unsubscribe();
  }
}
