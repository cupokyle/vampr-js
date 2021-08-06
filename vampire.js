class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let vampCounter = 0;
    let currentVamp = this;
    //As long as the vampire has a creator, we continue "looping" up the list
    while (currentVamp.creator) {
      currentVamp = currentVamp.creator;
      vampCounter++;
    }
    return vampCounter;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    }
    return false;
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let vampire2 = this;
    //As long as the vampire has a creator, we continue "looping" up the list
    // Trying to find a match
    vampire.offspring.forEach(kid => {
      if (kid === vampire2) {
        return vampire;
      }
    });
    vampire2.offspring.forEach(kid => {
      if (kid === vampire) {
        return vampire2;
      }
    });
    while (vampire !== vampire2) {
      if (vampire.creator === null) {
        vampire = vampire;
      } else {
        vampire = vampire.creator;
      }
      if (vampire2.creator === null) {
        vampire2 = vampire2;
      } else {
        vampire2 = vampire2.creator;
      }
    }
    if (vampire.yearConverted <= vampire2.yearConverted) {
      return vampire;
    } else {
      return vampire2;
    }
  }
}

module.exports = Vampire;

