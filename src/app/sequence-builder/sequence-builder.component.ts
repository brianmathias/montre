import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { DivisionStylesService } from '../services/division-styles.service';
import { OrganService } from '../services/organ.service';
import { SequenceService } from '../services/sequence.service';
import { VirtuosoService } from '../services/virtuoso.service';

import { Organ } from '../models/organ';
import { Piston } from '../models/piston';
import { Sequence } from '../models/sequence';


@Component({
  selector: 'app-sequence-builder',
  templateUrl: './sequence-builder.component.html',
  styleUrls: ['./sequence-builder.component.scss']
})
export class SequenceBuilderComponent implements OnInit, OnDestroy {

  /** Subscription to OrganSerivce.selectedOrgan$ observable. */
  organ$: Subscription;

  /** Reference to the current organ. */
  organ: Organ;

  /** Reference to SequenceService.sequence */
  sequence: Sequence;

  /** Array of the current organ's memory levels. */
  memoryLevels: number[];

  /** The currently selected memory level. */
  memoryLevel: number = 1;

  /** An array of the currently selected organ's pistons. */
  pistons: Piston[];
 
  
  constructor(private sequenceService: SequenceService, private organService: OrganService, private divisionStylesService: DivisionStylesService, private vs: VirtuosoService) { }

  ngOnInit(): void {
    this.organ$ = this.organService.selectedOrgan$.subscribe(val => this.setOrgan());
    this.sequence = this.sequenceService.sequence; 
  }

  ngOnDestroy(): void {
    this.organ$.unsubscribe();
  }

  setOrgan(): void {
    this.organ = this.organService.organ;
    this.memoryLevels  = this.organService.memoryLevels;
    this.pistons = this.organService.pistons;
  }

  addStep(memoryLevel: number, piston: number): void {
    this.sequenceService.addStep(memoryLevel, piston);
  }

  deleteStep(step: number): void {
    this.sequenceService.deleteStep(step);
  }

  /** Fires when a sequence step is reordered. */
  drop(event: CdkDragDrop<string[]>): void {
    this.sequenceService.reorderSequence(event.previousIndex, event.currentIndex);
  }

  /** Provides conditional CSS classes to enable division colors. */
  getDivisionStyle(manual: string) {
    return this.divisionStylesService.getDivisionClass(manual);
  }
}
