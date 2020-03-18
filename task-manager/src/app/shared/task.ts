import { Time } from '@angular/common';

export class Task {
    identification: string;
    firstName: string;
    lastName: string;
    startDate: Date;
    endDate: Date;
    startWorkShift: Time;
    endWorkShift: Time;
    startExtra: Time;
    endExtra: Time;
    extraReason: string;
}
