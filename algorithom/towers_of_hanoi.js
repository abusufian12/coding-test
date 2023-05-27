/**
 * 
 *  It takes four parameters: numDisks (the number of disks), source (the source tower), auxiliary (the auxiliary tower), and destination (the destination tower).

    The base case is when there is only one disk (numDisks === 1), in which case we simply move the disk from the source tower to the destination tower.

    For the general case (numDisks > 1), we follow the recursive algorithm:

    Move numDisks - 1 disks from the source tower to the auxiliary tower, using the destination tower as the temporary tower.
    Move the remaining largest disk from the source tower to the destination tower.
    Move the numDisks - 1 disks from the auxiliary tower to the destination tower, using the source tower as the temporary tower.
    In each recursive call, the roles of the source, auxiliary, and destination towers are swapped to perform the necessary moves.

    In the example usage, we solve the Towers of Hanoi problem with 3 disks (numDisks = 3). The towers are labeled as 'A', 'B', and 'C'.
    The sequence of moves required to solve the problem is printed to the console.
 */

function towersOfHanoi(numDisks, source, auxiliary, destination) {
  if (numDisks === 1) {
    console.log(`Move disk 1 from ${source} to ${destination}`);
    return;
  }

  towersOfHanoi(numDisks - 1, source, destination, auxiliary);
  console.log(`Move disk ${numDisks} from ${source} to ${destination}`);
  towersOfHanoi(numDisks - 1, auxiliary, source, destination);
}

// Example usage:
const numDisks = 3;
const source = "A";
const auxiliary = "B";
const destination = "C";

towersOfHanoi(numDisks, source, auxiliary, destination);
