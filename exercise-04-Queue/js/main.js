import { MaxPriorityQueue } from "@datastructures-js/priority-queue";
import { Stack } from "@datastructures-js/stack";

const disk_tower = (disks_provided) => {
    const queue = new MaxPriorityQueue();
    let tower = [];




}

disk_tower([4, 5, 1, 2, 3]).forEach((disks, day) => console.log('Day', day + 1, '=>', JSON.stringify(disks)));
  //@returns {Array}  [[], [5,4], [], [], [3,2,1]]