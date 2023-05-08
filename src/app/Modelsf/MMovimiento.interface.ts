import { SVenta } from "./MVenta.interface";
import {Observable} from 'rxjs';
import { SVentadetalle } from "./MVentadetalle.interface";

export interface SMovimiento{

    mVentaf:SVenta;
    mVentad:Observable<SVentadetalle[]>;

}