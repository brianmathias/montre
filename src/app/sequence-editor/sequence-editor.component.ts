import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DivisionStylesService } from '../services/division-styles.service';
import { OrganService } from '../services/organ.service';
import { SequenceService } from '../services/sequence.service';

import { Organ } from '../models/organ';
import { Piston } from '../models/piston';
import { Sequence } from '../models/sequence';


@Component({
  selector: 'app-sequence-editor',
  templateUrl: './sequence-editor.component.html',
  styleUrls: ['./sequence-editor.component.scss']
})
export class SequenceEditorComponent implements OnInit, OnDestroy {

  /** Reference to SequenceService.sequence. */
  sequence: Sequence;

  /** Subscription to OrganService.selectedOrgan$. */
  organ$: Subscription;

  /** Reference to the currently selected organ. */
  organ: Organ;

  /** Reference to the currently selected organ's memory levels. */
  memoryLevels: number[] = [];

  /** Reference to the currently selected organ's pistons. */
  pistons: Piston[] = [];
  
  constructor(private sequenceService: SequenceService, private organService: OrganService, private divisionStylesService: DivisionStylesService) {}

  ngOnInit(): void {
    this.organ$ = this.organService.selectedOrgan$.subscribe(val => this.setOrgan());
    this.sequence = this.sequenceService.sequence;
  }

  ngOnDestroy(): void {
    this.organ$.unsubscribe();
  }

  setOrgan(): void {
    this.organ = this.organService.organ;
    this.pistons = this.organService.pistons;
    this.memoryLevels = this.organService.memoryLevels;
  }

  setBases(method: number): void {
    this.sequenceService.setBases(method);
  }

  getDivisionStyle(manual: string) {
    return this.divisionStylesService.getDivisionClass(manual);
  }
}
