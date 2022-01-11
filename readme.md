# Node.js Random Emoji Generator

> Generate random emojis, optionally based on an input

Without any user input, print random emoji:

```bash
$ node index.js
🦄
$ node index.js
🍓
```

With user input of a correct emoji name, print emoji:

```bash
$ node index.js strawberry
🍓
```

With user input of an incorrect emoji name, print error message that emoji doesn't exist:

```bash
$ node index.js strazzberry
Emoji not found
```
