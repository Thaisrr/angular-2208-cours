import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent {

  @Input() title: string = 'Valeur par défaut';
  @Input() optionnel: string | undefined;
  @Input() optionnel2?: string;

  // Pas d'alerte disant que "obligatoire" peut être undefined
  // Ne ralera pas si le parent ne passe pas d'input
  // Donc attention : à éviter, sauf si on sait ce qu'on fait
  @Input() obligatoire!: string;


  @Output() emitter = new EventEmitter();

  @Output() message_emitter = new EventEmitter();

  message = 'Je suis un message de Enfant Component';


  sendEmit() {
    this.emitter.emit();
  }

  emitMessage() {
    this.message_emitter.emit(this.message);
  }




}
