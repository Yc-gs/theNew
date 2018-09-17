import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdSidenavModule, MdToolbarModule, MdIconModule,
  MdButtonModule, MdCardModule, MdInputModule
} from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule
  ],
  exports: [
    CommonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule
  ],
  declarations: []
})
export class SharedModule { }
