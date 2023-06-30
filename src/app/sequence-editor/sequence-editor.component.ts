import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SequenceService } from '../services/sequence.service';
import { Sequence } from '../models/sequence';
import { Organ } from '../models/organ';
import { Piston } from '../models/piston';
import { OrganService } from '../services/organ.service';
import { DivisionStylesService } from '../services/division-styles.service';


@Component({
  selector: 'app-sequence-editor',
  templateUrl: './sequence-editor.component.html',
  styleUrls: ['./sequence-editor.component.scss']
})
export class SequenceEditorComponent implements OnInit {

  sequence: Sequence;
  organ$: Subscription;
  organ: Organ;
  memoryLevels: number[] = [];
  pistons: Piston[] = [];
  
  constructor(private sequenceService: SequenceService, private organService: OrganService, private divisionStylesService: DivisionStylesService) {
    this.organ$ = this.organService.selectedOrgan$.subscribe(val => this.organ = this.organService.organ);
  }

  ngOnInit(): void {
    this.organ = this.organService.organ;
    this.pistons = this.organService.pistons;
    this.memoryLevels = this.organService.memoryLevels;
    this.sequence = this.sequenceService.sequence;
  }

  ngOnDestroy(): void {
    this.organ$.unsubscribe();
  }

  setBases(method: number): void {
    this.sequenceService.setBases(method);
  }

  getDivisionStyle(manual: string) {
    return this.divisionStylesService.getDivisionClass(manual);
  }
}
