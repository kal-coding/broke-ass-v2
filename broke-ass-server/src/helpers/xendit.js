const chalk = require('chalk');

const words = PORT => `${chalk.white(`Repo : Risk Scoring Service
Up and running on Port: `)} ${chalk.green(PORT)}`;
const gap =  chalk.white(`
- - - - - - - - - - - - -
`);

const r = chalk.red

const xenditLogo = PORT =>
  console.log(
    chalk.blue(`
      ________
     /  _____/   ${r(`/`)}\\
    /  ${r(`\\`)}        ${r(`/`)}  \\
   / /${r(`\\ \\`)}      ${r(`/ /`)}\\ \\
  / /  ${r(`\\ \\`)}    ${r(`/ /`)}  \\ \\
 / /    ${r(`'''`)}  ${r(`/ /`)}    \\ \\
/ /         ${r(`/ /`)}      \\ \\  
\\ \\        ${r(`/ /`)}       / /
 \\ \\      ${r(`/ /`)}       / /
  \\ \\    ${r(`/ /`)} ${r(`...`)}   / /
   \\ \\  ${r(`/ /`)}  ${r(`\\ \\`)}  / /
    \\ \\${r(`/ /`)}  __${r(`\\ \\`)}/ /
     \\ /   /______/
${gap}
${words(PORT)}
`)
  );

const bloom = PORT => {
  console.log(xenditLogo(PORT));    
}

module.exports = {
  bloom
}