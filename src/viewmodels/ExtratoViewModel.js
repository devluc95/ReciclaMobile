// src/viewmodels/ExtratoViewModel.js
import ExtratoModel from "../models/ExtratoModel";

export default class ExtratoViewModel {
  constructor() {
    this.itens = [
      new ExtratoModel(1, "Papel", "3 Kg", "R$ 8,00", "22/10/2025"),
      new ExtratoModel(2, "Metal", "5 Kg", "R$ 25,00", "20/10/2025"),
      new ExtratoModel(3, "Eletrônicos", "2 unid.", "R$ 50,00", "10/10/2025"),
    ];
  }

  getItens() {
    return this.itens;
  }
}
