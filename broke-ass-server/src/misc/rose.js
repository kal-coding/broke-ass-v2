const chalk = require('chalk');

const words = PORT => `${chalk.white('I live and breathe on')} ${chalk.red(PORT)}`;

const rose = PORT => `${chalk.red(`
    _,--._.-,
   /\\_r-,\\_ )
.-.) _;='_/ (.;
 \\ \\'     \\/  )
  L.'-. _.'|-'
 <_\`-'\\'_.'/     ${words(PORT)}
   \`'-._( `)}`;

const stem = `${chalk.green(`\\  
    ___   \\\\,      ___
    \ . '-. \\\\  .-'_. /
     '._' '.\\\\/.-'_.'
        '--\`\`\\('--'
              \\\\
              \`\\\\>
                \\\\
    
    `)}`

const bloom = PORT => {
  console.log( rose(PORT) + stem)
}

module.exports = {
  bloom
};