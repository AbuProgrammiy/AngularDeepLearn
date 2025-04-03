import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";

export function noAWordValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value.toUpperCase().includes("A")) {
        return { "AExists": true };
        // xatolikni yuborish
    }

    return null;
    // xato yo'q bo'lsa null qaytarish
}

export function isUsernameTakenAsync(control: AbstractControl): Observable<ValidationErrors | null> {
    if(control.value=="admin"){
        return of({ "isUsernameTaken": true });
    }

    return of(null)
}