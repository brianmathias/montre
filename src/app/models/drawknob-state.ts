
/**
 * Enum for five possible drawknob states:
 * 
 * - Off (0)
 * - On (1)
 * - Remove (2)
 * - Add (3)
 * - OutOfRange (4)
 */
export enum DrawknobState {
  Off, // 0
  On, // 1
  Remove, // 2
  Add, // 3
  OutOfRange // 4
}

/** Enum for three possible drawknob types:
 * 
 *  - Stop (0) - A speaking or non-speaking stop (nearly all drawknobs are of this type)
 *  - Aux (1) - An "auxiliarry" stop (stop controls housed in the two drawers of the Tabernacle organ)
 *  - Exp (2) - An expression stop (assignable expression drawknobs on the Conference Center organ)
 *
 */  
export enum DrawknobType {
  Stop, // 0
  Aux, // 1
  Exp // 2
}