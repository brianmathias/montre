import { Organs } from '../models/organs';
import { DrawknobState } from '../models/drawknob-state';

/** Object that represents one of six Tuttis contained in each Virtuoso folder. */
export interface Tutti {

    /** The index number of the Tutti. */
    num: number,

    /** The organ the tutti is associated with. */
    organ: Organs,

    /** An array containing the state of all drawknobs for the tutti. */
    drawknobs: DrawknobState[]
}