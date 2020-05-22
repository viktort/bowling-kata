const BowlingScoreCalculator = require('../../src/BowlingScoreCalculator')

describe('Test bowling game calculator feature', () => {
  const bowlingScoreCalculator = new BowlingScoreCalculator()

  context('when calculating score for pins', () => {
    const rollsAndScore = {
      '0': 0,
      '1': 1,
      '2': 2,
      '23': 5
    }

    for (const roll in rollsAndScore) {
      it('should return integer score for pins', () => {
        expect(bowlingScoreCalculator.scoreFor(roll)).to.equal(rollsAndScore[roll])
      })
    }
  })

  context('when all rolls contain misses', () => {
    const rollsAndScore = {
      '-': 0,
      '--': 0,
      '-9': 9,
      '8-': 8
    }
    for (const roll in rollsAndScore) {
      it('should calculate score for misses', () => {
        expect(bowlingScoreCalculator.scoreFor(roll)).to.equal(rollsAndScore[roll])
      })
    }
  })

  context('when all rolls contain spares', () => {
    const rollsAndScore = {
      '/': 10,
      '3/': 10,
      '5/': 10,
      '5/-': 10,
      '5/7': 24,
      '7/7/7/7/7/7/7/7/7/-': 146,
      '2/2/2/2/2/2/2/2/2/-': 106
    }
    for (const roll in rollsAndScore) {
      it('should calculate score for spares', () => {
        expect(bowlingScoreCalculator.scoreFor(roll)).to.equal(rollsAndScore[roll])
      })
    }
  })

  context('when all rolls contain strikes', () => {
    const rollsAndScore = {
      'X': 10,
      'X52': 24,
      'X5': 20
    }

    for (const roll in rollsAndScore) {
      it('should calculate score for strikes', () => {
        expect(bowlingScoreCalculator.scoreFor(roll)).to.equal(rollsAndScore[roll])
      })
    }
  })

  context('when all rolls contain both spares and strikes', () => {
    it('should calculate score for spares and strikes', () => {
      expect(bowlingScoreCalculator.scoreFor('X9/45')).to.equal(43)
    })
  })

  context('when all rolls contain a full game', () => {
    const rollsAndScore = {
      '1/35XXX458/X3/XX6': 189,
      'XXXXXXXXXXXX': 300
    }

    for (const roll in rollsAndScore) {
      it('should calculate score correctly for the last frame', () => {
        expect(bowlingScoreCalculator.scoreFor(roll)).to.equal(rollsAndScore[roll])
      })
    }
  })

  context('when a full game contains the correct boundaries for frames and bonus rolls', () => {
    const rollsAndScore = {
      'X|7/|9-|X|-8|8/|-6|X|X|X||81': 167,
      '5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5': 150,
      '9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||': 90,
      'X|X|X|X|X|X|X|X|X|X||XX': 300
    }

    for (const roll in rollsAndScore) {
      it('should calculate score correctly for each game', () => {
        expect(bowlingScoreCalculator.scoreFor(roll)).to.equal(rollsAndScore[roll])
      })
    }
  })
})