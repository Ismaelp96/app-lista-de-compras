import { Item } from 'src/app/interfaces/iItem';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemVaiSerEditado!: Item;

  valorItem!: string;

  constructor(private listaService: ListaDeCompraService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['itemVaiSerEditado'].firstChange) {
      this.valorItem = this.itemVaiSerEditado?.nome;
    }
  }

  adicionarItem() {
    this.listaService.addItemNaLista(this.valorItem);
    this.limparCampo();
  }
  limparCampo() {
    this.valorItem = '';
  }
}
