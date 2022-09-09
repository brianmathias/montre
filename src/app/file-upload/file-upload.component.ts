import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { FileService } from '../services/file.service';
import { OrganService } from '../services/organ.service';
import { SequenceService } from '../services/sequence.service';

import { Organs } from '../models/organs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnDestroy {

  /** The File object for the user-supplied file. */
  file: File | null = null;

  /** The name of the user-supplied file. */
  fileName: string = "";

  /** A subscription to the FileService.fileName$ observable. */
  fileName$: Subscription;

  /** Boolean indicating whether or not a file has been uploaded. */
  fileLoaded: boolean = false;

  /** A subscription to the FileService.fileLoaded$ observable. */
  fileLoaded$: Subscription;

  /** String indicating an error with the file upload. (Is this necessary?) */
  fileError: string = "";

  /** A subscription to the FileService.fileError$ observable. */
  fileError$: Subscription;

  /** The currently selected organ. */
  organ: Organs;

  organ$: Subscription

  constructor(private organService: OrganService, private fileService: FileService, private sequenceService: SequenceService) {
    
    this.fileLoaded$ = this.fileService.fileLoaded$.subscribe(val => this.fileLoaded = val);
    this.fileName$ = this.fileService.fileName$.subscribe(val => this.fileName = val);
    this.fileError$ = this.fileService.fileError$.subscribe(val => this.fileError = val);
    this.organ$ = this.organService.selectedOrgan$.subscribe(val => this.organ = val);
    
  }

  ngOnDestroy(): void {
    this.fileLoaded$.unsubscribe();
    this.fileName$.unsubscribe();
    this.fileError$.unsubscribe();
    this.organ$.unsubscribe();
  }

  /** Shows the dialog box to select a file for upload. (Necessary in order to hide the ugly HTML default
   * file upload element.) */
  selectFile(): void {
    const fileElement = document.getElementById("fileElem");
    if(fileElement) { fileElement.click(); }
  }

  /** Sends the file to FileService for processing. */
  //handleFile(files: FileList): void {
  handleFile(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    this.fileService.loadFile(fileList[0]);
  }

  /** Sets the current organ. */
  setOrgan(organ: Organs): void {
    this.organService.setOrgan(organ);
  }

}
