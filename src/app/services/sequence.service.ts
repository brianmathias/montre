import { Injectable, OnDestroy } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subscription } from 'rxjs';
import { moveItemInArray } from '@angular/cdk/drag-drop';

import { OrganService } from './organ.service';

import { Sequence } from '../models/sequence';
import { Piston } from '../models/piston';

/**
 * This service holds the sequence data that is used by the SequenceBuilder, SequenceEditor,
 * and Print components, as well as the various services that generate the PDF record sheets.
 */
@Injectable({
  providedIn: 'root'
})
export class SequenceService implements OnDestroy {

  /** Local copy of pistons from OrganService. */
  private _pistons: Piston[];

  /** Subscription to OrganService.selectedOrgan$. */
  private organSubscriptionS: Subscription;

  /** The current sequence. */
  public sequence: Sequence;
  
  constructor(private organService: OrganService) {

    this.sequence = new Sequence();

    this.organSubscriptionS = organService.selectedOrgan$.subscribe(val => {
      this._setOrgan();
    });
  }

  ngOnDestroy(): void {
    this.organSubscriptionS.unsubscribe();
  }

  /**
   * Sets the organ that the sequence is associated with. Since OrganService already knows
   * which organ has been selected, no parameters are necessary.
   */
  private _setOrgan(): void {
    this.sequence.organ = this.organService.organ.organ;
    this.sequence.organString = this.organService.organ.code;
    this._pistons = this.organService.pistons;
  }

  /** Clears the current sequence and creates a new one. */
  public clearSequence(): void {
    this.sequence = new Sequence();
    this._setOrgan();
  }
 
  /**
   * Adds a step to the end of the current sequence.
   * 
   * @param memoryLevel {number} - The memory level of the piston to be added to the sequence.
   * @param piston {number} - The index number of the piston to be added to the sequence.
   */
  public addStep(memoryLevel: number, piston: number): void {

    this.sequence.steps.push({
      memoryLevel: memoryLevel,
      piston: piston,
      base: -1,
      notes: "",
      measure: ""
    });
  }

  
  /**
   * Deletes a step from the current sequence at the provided index.
   * 
   * @param index {number} - The Index number of the step to be deleted from the sequence.
   */
  public deleteStep(index: number): void {
    let arr = this.sequence.steps.splice(index, 1);
  }

  /**
   * Re-orders the sequence based on drag and drop interactions. 
   * 
   * @param previousIndex {number} - The previous index of the item to be moved.
   * @param currentIndex  {number} - The new index of the item to be moved.
   */
  public reorderSequence(previousIndex: number, currentIndex: number): void { 

    // moveItemInArray function comes from the Angular drag and drop library.
    moveItemInArray(this.sequence.steps, previousIndex, currentIndex);
  }

  /**
   * Sets the base pistons of each step in the sequence using the following methods:
   * 0. None
   * 1. Previous General Piston
   * 2. Previous Piston
   * 
   * @param method {number} - Numbered options above.
   */
  public setBases(method: number): void {
    
    if(method === 0) { // "None"
      for(let step of this.sequence.steps) {
        step.base = -1;
      }
    } else if (method === 1) { // "Previous General Piston"
      
      let base: number = -1;
      
      this.sequence.steps.forEach((step, index) => {
        this.sequence.steps[index].base = base;
        if(this._pistons[step.piston].division === "General") {
          base = index;
        }
      });
    } else if (method === 2) { // "Previous Piston"
      
      this.sequence.steps.forEach((step, index) => {
        step.base = index - 1;
      });
    }
  }
}
