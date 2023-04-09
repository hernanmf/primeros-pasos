import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { PistaService } from './pista.service';
import { Pista } from './pista';

@Controller('pista')
export class PistaController {
  constructor(private readonly pistaService: PistaService) {}

  @Get() //url pistas
  getPistas(): Pista[] {
    return this.pistaService.getPistas(
      ' ',
    ); /* aca va la direccion de donde esta el txt con las pistas */
  }
}
