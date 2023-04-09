import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Pista } from './pista';

@Injectable()
export class PistaService {
  getPistas(url: string): Pista[] {
    let pistas = [];

    const datos = fs.readFileSync(url, 'utf-8');

    const renglon = datos.split('\r \n');

    for (let linea of renglon) {
      let partes = linea.split(',');

      let pista = new Pista(
        parseInt(partes[0]),
        partes[1],
        parseInt(partes[2]),
        partes[3],
        parseInt(partes[4]),
      );

      pistas.push(pista);
    }
    return pistas;
  }
}
