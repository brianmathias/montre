import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { OrganService } from '../services/organ.service';
import { VirtuosoService } from '../services/virtuoso.service';

import { TallySheet } from '../models/tally-sheet';
import { Piston } from '../models/piston';

@Component({
  selector: 'app-level-checker',
  templateUrl: './level-checker.component.html',
  styleUrls: ['./level-checker.component.scss']
})
export class LevelCheckerComponent implements OnDestroy {

  /** Subscription to OrganService.selected organ (so organ can be updated if it changes when new file uploaded).*/
  selectedOrgan$: Subscription;

  /** The currently selected memory level. */
  memoryLevel: number;

  /** An array of memory levels from the current Organ object. */
  memoryLevels: number[];

  /** An array of pistons from the current Organ object. */
  pistons: Piston[];
  
  /** The TallySheet object from the current Organ object. */
  tallySheet: TallySheet;

  /** An array of piston states for the currently selected memory level (true = "set", false = "clear").*/
  pistonState: boolean[] = [];

  constructor(private organService: OrganService, private virtuosoService: VirtuosoService) { }

  ngOnInit(): void {
    
    this.selectedOrgan$ = this.organService.selectedOrgan$.subscribe(value => {
      this.setOrgan();
    });
    
    this.memoryLevel = 1;  
    this.selectLevel(this.memoryLevel)
  }

  ngOnDestroy(): void {
    this.selectedOrgan$.unsubscribe();
  }

  /** Function called when the memory level dropdown changes. */
  selectLevel(level: number): void {

    this.pistonState = [];

    // Loop through every piston of memory level to determine whether it has been set or is clear.
    for(let piston of this.pistons) {
      let state = this.virtuosoService.getPistonStatus(this.memoryLevel, piston.id);
      this.pistonState.push(state);
    }
  }

  setOrgan(): void {
    this.memoryLevels = this.organService.memoryLevels;
    this.pistons = this.organService.pistons;
    this.tallySheet = this.organService.tallySheet;
  }

  /** Takes a piston id and retrieves the piston number. */
  getNumber(pistonID: number): string {
    if (pistonID >= 0) { return this.pistons[pistonID].number.toString(); }
    else { return ""; }
  }

  /** Provides the template text for each piston cell, depending on whether it is set or clear. */
  getState(pistonID: number): string {
    if (pistonID === -1) { return ""; }
    else {
      if (this.pistonState[pistonID]) { return "Set"; }
      else { return "Clear"; }
    }
  }

  /** Provides the CSS class that should be applied to each piston cell, depending on whether it is set or clear. */
  getClass(pistonID: number): string {
    if (pistonID === -1) { return "disabled"; }
    else {
      if (this.pistonState[pistonID]) { return "set"; }
      else { return "clear"; }
    }
  }
}
