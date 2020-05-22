### Bowling game kata
 
Practice TDD using transformation priority premise

### Requirements

- _Input_: A string representing the rolls for the game
- _Output_: An integer representing the score for each game

_Symbols used:_

```text
X indicates a strike
/ indicates a spare
- indicates a miss
| indicates a frame boundary
The characters after the || indicate bonus balls
```

### Acceptance criteria:

- **"X|X|X|X|X|X|X|X|X|X||XX"** Gives a total score of **300**
- **"9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||"** Gives a total score of **90**
- **"5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5"** Gives a total score of **150**
- **"X|7/|9-|X|-8|8/|-6|X|X|X||81"** Gives a total score of **167**
