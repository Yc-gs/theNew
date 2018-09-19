import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdSidenavModule, MdToolbarModule, MdIconModule,
  MdButtonModule, MdCardModule, MdInputModule,
  MdListModule, MdGridListModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdGridListModule
  ],
  exports: [
    CommonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdGridListModule
  ],
  declarations: []
})
export class SharedModule { }
