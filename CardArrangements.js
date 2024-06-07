var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize !== 0) return false

    const sorted = hand.sort((a, b) => a - b)
    const used = new Array(hand.length).fill(0)

    let groups = 0

    const getStart = () => {
        for(let i = 0; i < hand.length; i++) {
            if (!used[i]) return i
        }
    }

    while(groups < (hand.length / groupSize)){
        let cur = getStart()
        let curVal = -1
        let size = 0

        while(size < groupSize && cur < hand.length) {
            if (curVal === -1 || (!used[cur] && sorted[cur] === curVal + 1)) {
                size++
                used[cur] = 1
                curVal = sorted[cur]
            } else if (sorted[cur] > curVal + 1) {
                return false
            }

            cur++
        }

        if (size < groupSize) return false
        groups++
    }

    return true
};