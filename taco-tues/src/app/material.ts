import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule],
  exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule],
})
export class MaterialModule { }
