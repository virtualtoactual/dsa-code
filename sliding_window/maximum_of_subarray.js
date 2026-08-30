function maxOfAllSubarrays(arr, k) {
    const result = [];
    const deque  = [];   // stores indexes in decreasing order of values
    const n      = arr.length;

    let i = 0;
    let j = 0;

    while (j < n) {

        // ── EXPAND: remove smaller elements from back ──────────────────────
        //   incoming element arr[j] is bigger → old smaller elements
        //   can NEVER be max → remove them from back
        while (deque.length > 0 && arr[deque[deque.length - 1]] <= arr[j]) {
            deque.pop();
        }
        deque.push(j);  // add current index to deque


        // ── WINDOW NOT FULL YET: just move j forward ───────────────────────
        if (j - i + 1 < k) {
            j++;
        }


        // ── WINDOW FULL: calculate answer then slide ───────────────────────
        else if (j - i + 1 === k) {

            // front of deque = max of current window
            result.push(arr[deque[0]]);

            // slide window → remove i from front if it is out of window
            if (deque[0] === i) {
                deque.shift();
            }

            // slide window forward
            i++;
            j++;
        }
    }

    return result;
}

// Tests
console.log(maxOfAllSubarrays([1, 3, -1, -3, 5, 3, 6, 7], 3));
// [3, 3, 5, 5, 6, 7] ✅

console.log(maxOfAllSubarrays([1, 2, 3, 4, 5], 2));
// [2, 3, 4, 5] ✅

console.log(maxOfAllSubarrays([5, 4, 3, 2, 1], 3));
// [5, 4, 3] ✅