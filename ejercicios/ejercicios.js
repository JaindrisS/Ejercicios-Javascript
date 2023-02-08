// create a function which returns an RNA sequence from the given DNA sequence
function DNAtoRNA(dna = "") {
  if (dna.includes("T")) {
    return dna.replaceAll("T", "U");
  }

  return dna;
}

// ejemplo "GCAT"  =>  "GCAU"

console.log(DNAtoRNA("GCA"));

//  Serie de ejercicios resultos de las paginas codewars leetcode hackerrank entre otras 