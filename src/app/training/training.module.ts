import {NgModule} from '@angular/core';
import {TrainingComponent} from './training.component';
import {CurrentTrainingComponent} from './current-training/current-training.component';
import {NewTrainingComponent} from './new-training/new-training.component';
import {PastTrainingsComponent} from './past-trainings/past-trainings.component';
import {FormsModule} from '@angular/forms';
import {StopTrainingComponent} from './current-training/stop-training.component';
import {SharedModule} from '../shared/shared.module';
import {TrainingRoutingModule} from './training-routing.module';
import {StoreModule} from '@ngrx/store';
import {trainingReducer} from './state/training.reducer';
import {EffectsModule} from '@ngrx/effects';
import {TrainingEffects} from './state/training.effects';


@NgModule({
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    StopTrainingComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    TrainingRoutingModule,
    EffectsModule.forFeature([TrainingEffects]),
    StoreModule.forFeature('training', trainingReducer)
  ],
  entryComponents: [StopTrainingComponent],
})
export class TrainingModule {
}
