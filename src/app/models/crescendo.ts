import { DrawknobState } from '../models/drawknob-state';
import { Organs } from '../models/organs';

/** An object that represents one of the four cresendos found in a Virtuoso file. */
export interface Crescendo {

    /** The index of the crescendo (1-4) */
    num: number,

    /** The organ the cresencdo is associated with. */
    organ: Organs,

    /** An array of CresendoState objects that holds the piston data for the 60 stages of the cresendo. */
    stages: CrescendoStage[]
}

/** An object that represents a single crescendo stage. */
export interface CrescendoStage {

    /** The index number (0-59) of the crescnedo stage the object holds. */
    stage: number,

    /** Array of DrawknobState enums containing the drawknobs for the current stage. */
    drawknobs: DrawknobState[]
}