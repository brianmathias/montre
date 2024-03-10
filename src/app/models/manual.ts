import { Piston } from './piston';

/** Object that represents a single manual with the following properties: */
export interface Manual {

    /** The name of the manual/division. */
    name: string;

    /** The zero-based index of the manual, starting at the lowest (Pedal = 0, Choir = 1, etc.) */
    orderNumber: number;

    /**  Roman numeral representing the postiion of the manual. */
    orderNumeral: string;

    /** The pistons associated with the manual. */
    pistons: Piston[];
    
}