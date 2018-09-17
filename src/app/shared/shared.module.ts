import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdSidenavModule, MdToolbarModule, MdIconModule,
  MdButtonModule, MdCardModule, MdInputModule,
  MdListModule
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
    MdListModule
  ],
  exports: [
    CommonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule
  ],
  declarations: []
})
export class SharedModule { }
