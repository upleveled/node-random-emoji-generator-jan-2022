// CommonJS version that didn't work:
// var emoji = require('node-emoji');

// ESM version that works:
import emoji from 'node-emoji';

const emojiInput = process.argv[2];

// If the user has chosen an emoji
if (emojiInput) {
  // If there's no emoji found, print an error message
  if (!emoji.hasEmoji(emojiInput)) {
    console.log('Emoji not found');
  } else {
    // Print chosen emoji
    console.log(emoji.get(emojiInput));
  }
} else {
  // Print random emoji
  console.log(emoji.random().emoji);
}
