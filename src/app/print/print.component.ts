import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DivisionStylesService } from '../services/division-styles.service';
import { FileService } from '../services/file.service';
import { OrganService } from '../services/organ.service';
import { ProcessService } from '../services/process.service';
import { SequenceService } from '../services/sequence.service';

import { Piston } from '../models/piston';
import { Sequence } from '../models/sequence';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent {

  /** The current sequence. */
  sequence: Sequence;

  /** An array of the current organ's pistons. */
  pistons: Piston[];

  /** An array of base pistons (used where?) */
  bases: Piston[];

  showNextBar: boolean = false;
  filename: string = "";

  constructor(private sequenceService: SequenceService, private organService: OrganService, private divisionStylesService: DivisionStylesService, private processService: ProcessService, private router: Router, private fileService: FileService) {
    this.sequence = this.sequenceService.sequence;
    this.pistons = this.organService.pistons;
   }

  /** Print the sequence and show the toolbar providing possible next actions. */ 
  print(): void {
    this.filename = this.processService.process(this.sequence);
    this.showNextBar = true;
  }

  /** Return to the Edit screen. */
  edit(): void {
    this.router.navigate(["edit"]);
  }

  /** Start a new sequence using the same file. */
  newSequence(): void {
    this.sequenceService.clearSequence();
    this.router.navigate(["build"]);
  }

  /** Start a new sequence using a different Virtuoso file. */
  newFile(): void {
    this.sequenceService.clearSequence();
    this.fileService.unloadFile();
    this.router.navigate([""]);
  }

  /** Provides conditional CSS classes to enable division colors. */ 
  getDivisionStyle(manual: string) {
    return this.divisionStylesService.getDivisionClass(manual);
  }
}
