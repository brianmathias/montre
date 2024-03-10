import { Organs } from '../models/organs';
import { SequenceStep, PrintStep } from "./sequence-step";

/** Class to contruct a new sequence. */
export class Sequence {

    composition: {

        /** The title of the composition */
        title: string,

        /** The composer of the composition. */
        composer: string,

        /** The Tabernacle Choir catalog number of the composition. */
        catalogNo: string
    }
    
    /** The type of sequence (choral or organ). Used for alternate filename formats. */
    type: string;

    /** The version of the composition (i.e., "Organ w/ Orchestra", "Organ Only", etc.) */
    version: string;

    /** The version code (used for OneDrive filing). Examples: O, O4, OI, OO. */
    versionCode: string;

    /** The organ associated with the current sequence. */
    organ: Organs;

    /** The short venue string (TAB or CC) of the organ associated with the current sequence. */
    organString: string;

    /** Array containing the individual steps of the sequence. */
    steps: SequenceStep[]

    constructor() {

        this.composition = {
            title: "",
            composer: "",
            catalogNo: ""
        };

        this.type = "Choral";
        this.version = "";
        this.steps = [];

    }

    /*
    setOrgan(organ: Organs): void {
        this.organ = organ;
    }
    */
}

/**
 * Subclass of Sequence that includes drawknob data from VirtuosoService.
 * 
 * @extends Sequence
 */
export interface PrintSequence extends Sequence {
    steps: PrintStep[];
    date?: Date;
}