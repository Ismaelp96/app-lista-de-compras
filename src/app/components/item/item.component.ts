import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {}

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }
  delItem() {
    console.log('Não quero te comprar!');
    this.emitindoIdParaDeletar.emit(this.item.id);
  }
  ngOnDestroy() {
    console.log('Não te comprei!');
  }
}
