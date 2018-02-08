import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {ExerciseThree} from "./exercise.three";

export class SaveFormGuard implements CanDeactivate<ExerciseThree> {
    canDeactivate(component: ExerciseThree,
                  route: ActivatedRouteSnapshot,
                  state: RouterStateSnapshot): boolean {
        return component.canDeactivate() || window.confirm("Are you sure?");
    }
}