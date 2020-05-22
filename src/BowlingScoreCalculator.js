const SPARE = '/'
const STRIKE = 'X'
const NORMAL_FRAME_COUNT = 18

class BowlingScoreCalculator {
  scoreFor (allRolls) {
    const allRollsArray = [...this._normaliseString(allRolls)]

    return allRollsArray.reduce((score, roll, index) => {
      return score + this._score(roll) - this._spareDiff(allRollsArray, roll, index) + this._bonus(allRollsArray, roll, index)
    }, 0)
  }

  _score (roll) {
    if (this._withinRange(roll, 1, 9)) return parseInt(roll, 10)
    if ([SPARE, STRIKE].includes(roll)) return 10
    return 0
  }

  _withinRange (roll, min, max) {
    return roll >= min && roll <= max
  }

  _spareDiff (allRollsArray, roll, index) {
    if (roll === SPARE) return this._score(allRollsArray[index - 1])
    return 0
  }

  _bonus (allRollsArray, roll, index) {
    if (this._isLastFrame(allRollsArray, index)) return 0
    if (roll === SPARE) return this._nextPin(allRollsArray, index)
    if (roll === STRIKE) return this._nextTwoPins(allRollsArray, index)
    return 0
  }

  _isLastFrame (allRollsArray, index) {
    const subArray = allRollsArray.slice(0, index + 1)
    return NORMAL_FRAME_COUNT < subArray.length + subArray.filter(elem => elem === STRIKE).length
  }

  _nextTwoPins (allRollsArray, index) {
    const nextPlusOne = allRollsArray[index + 2]
    if (nextPlusOne === SPARE) return 10
    return this._nextPin(allRollsArray, index) + this._score(nextPlusOne)
  }

  _nextPin (allRollsArray, index) {
    return this._score(allRollsArray[index + 1])
  }

  _normaliseString (allRolls) {
    return allRolls.split('|').join('')
  }
}

module.exports = BowlingScoreCalculator
