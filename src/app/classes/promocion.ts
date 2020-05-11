import { Producto } from './producto';

export class Promocion {
    codigo: number;
    mensaje: string;
    fecha: Date;
    producto: Producto;
    porcentajePromocion: number;
}