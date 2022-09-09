import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SequenceBuilderComponent } from './sequence-builder/sequence-builder.component';
import { SequenceEditorComponent } from './sequence-editor/sequence-editor.component';
import { PrintComponent } from './print/print.component';
import { LevelCheckerComponent } from './level-checker/level-checker.component';
import { OptionsComponent } from './options/options.component';

//import { MonitorComponent } from './monitor/monitor.component';
//import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FileUploadComponent,
    SequenceBuilderComponent,
    SequenceEditorComponent,
    PrintComponent,
    LevelCheckerComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
