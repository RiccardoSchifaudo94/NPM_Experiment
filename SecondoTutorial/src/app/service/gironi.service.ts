import  {Injectable} from '@angular/core';
import {GIRONI} from './mock.gironi';

@Injectable()

export class GironiService {
	
	getGironi(){
		return GIRONI;
	}

}