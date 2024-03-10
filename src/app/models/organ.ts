
import { OrganLayout } from './organ-layout';
import { OrganConfig } from './organ-config';
import { Organs } from './organs';
import { TallySheet } from './tally-sheet';
import { Manual } from "./manual";
import { Stop } from "./stop";
import { Piston } from './piston';

/**
 * An object representing an organ.
 */
export interface Organ {

    /** The venue in which the organ is housed. */
    venue: string;

    organ: Organs;

    /** The short venue code (TAB, CC) */
    code: string;

    /** The number of memory levels contained in each user folder. */
    memoryLevels: number;

    /** The builder of the organ. */
    builder: string;

    /** An array of the organ's manuals. */
    manuals: Manual[];

    /** An array of the organ's stops. */
    stops: Stop[];

}

/** An object that contains the Organ, OrganLayout, and OrganConfig objects for a single organ. */
export interface OrganObject {
    
    /** the Organ object. */
    organ: Organ,

    /** The OrganLayout object. */
    layout: OrganLayout,

    /** The OrganConfig object. */
    config?: OrganConfig,

    /** The TallySheet object. */
    tallySheet: TallySheet,

    /** An array of the organ's memory levels. */
    memoryLevels: number[],

    /** An array of the organ's manuals. */
    manuals: Manual[],

    /** An array of the organ's pistons. */
    pistons: Piston[]
}