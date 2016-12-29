/*
* tesla-battery-module.ts
*/

import { CommonModule } from '@angular/common';
import { ngModule } from '@angular/core';
import { ReactiveFormsModule } from 'angular/forms';

// services
import { BatteryService } from './tesla-battery.service';

@ngModule({
    declarations: [],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [
        // add the service to our sub-module
        BatteryService
    ],
    exports: []
})
export class TeslaBatteryModule {}
