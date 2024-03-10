/**  Object that represents a Tally Sheet (used to construct the "Check" view. */
export interface TallySheet {

    /** Array of TallySheetColumn objects. */
    columns: TallySheetColumn[];
}

/**  Object that represents a single column of the "Check"  view. */
export interface TallySheetColumn {

    /** Array of the organ's divisions that are contained within the column view.  */
    divisions: TallySheetDivision[];
}

/** Object that represents a single division within a TallySheetColumn. */
export interface TallySheetDivision {

    /** The name of the division. */
    name: string;

    /** Array of the pistons contained in each division. */
    pistons: TallySheetPiston[];
}

/** Object that represents each piston within a TallySheetDivision. */
export interface TallySheetPiston {

    /** The number of the piston. */
    pistonID: number;
}