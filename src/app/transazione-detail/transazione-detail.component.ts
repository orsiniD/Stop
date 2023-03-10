import { Component, Input } from '@angular/core';
import { Transazione } from '../transazione';

@Component({
  selector: 'app-transazione-detail',
  templateUrl: './transazione-detail.component.html',
  styleUrls: ['./transazione-detail.component.css'],
})
export class TransazioneDetailComponent {
  @Input()
  transazione?: Transazione;
}
