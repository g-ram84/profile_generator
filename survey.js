const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name?  (We accept nicknames :)', (answer) => {
  console.log(`Nice to meet you: ${answer}`);
  rl.resume();
  rl.question('What is an activity you like doing?', (answer) => {
    console.log(`No way! I also love: ${answer}`);
    rl.resume();
    rl.question('What do you listen to while doing that?', (answer) => {
      console.log(`Oh you're a fan of ${answer}, eh?`);
      rl.resume();
      rl.question('Are you a breakfast, lunch, or dinner person?', (answer) => {
        console.log(`I also never skip: ${answer}`);
        rl.resume();
        rl.question('What is your favourite thing to eat for that meal?', (answer) => {
          console.log(`I've never tried: ${answer}!`);
          rl.resume();
          rl.question('What is your favourite sport?', (answer) => {
            console.log(`We've got a pro: ${answer} over here!`);
            rl.resume();
            rl.question('What is your superpower?', (answer) => {
              console.log(`Ooooh: ${answer}, that's a good one!`);
              rl.close();
            });
            
          });
        });
      });
    });
  });
});









