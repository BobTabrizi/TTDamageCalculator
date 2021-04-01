import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [],
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports:[
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule { }
