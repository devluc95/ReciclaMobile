// src/models/ExtratoModel.js
export default class ExtratoModel {
  constructor(id, tipo, quantidade, valor, data) {
    this.id = id;
    this.tipo = tipo;
    this.quantidade = quantidade;
    this.valor = valor;
    this.data = data;
  }
}
