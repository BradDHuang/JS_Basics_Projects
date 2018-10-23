
let meetings = [[0, 30], [5, 10], [15, 20]];
// for this example, the min. meeting rooms is: 2 rooms.

function countMinRooms(meetings) {
  let startTimes = [];
  let endTimes = [];
  for (let i = 0; i < meetings.length; i++) {
    startTimes.push(meetings[i][0]);
    endTimes.push(meetings[i][1]);
  }
  let minRooms = 0;
  let endTimesIndex = 0;
  startTimes.sort((a, b) => a - b);
  endTimes.sort((a, b) => a - b);
  // console.log(startTimes);
  // console.log(endTimes);
  for (let i = 0; i < meetings.length; i++) {
    if (startTimes[i] < endTimes[endTimesIndex]) {
      minRooms += 1;
    } else {
      endTimesIndex += 1;
    }
  }
  return minRooms;
}

console.log(countMinRooms(meetings)); // 2

let newMeetings = [[1,4], [2,5], [3,10], [6,7], [8,10], [9,12]];
console.log(countMinRooms(newMeetings)); // min. 3 rooms


// ref.: https://www.youtube.com/watch?v=wB884_Os58U


