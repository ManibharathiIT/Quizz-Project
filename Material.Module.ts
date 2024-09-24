import { NgModule } from "@angular/core";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from "@angular/forms";
@NgModule({
    exports:[
        MatFormFieldModule,MatIconModule,MatInputModule,MatButtonModule,MatRadioModule
    ],
    imports:[
        FormsModule
    ]
})
export class MaterialModule{}