import { publish } from 'gh-pages';

publish(
 'build',
 {
  branch: 'gh-pages',
  repo: 'https://github.com/Nicoka11/NicolasKa_6_07012022.git',
  user: {
   name: 'Nicoka11',
   email: 'nicoka11@yahoo.fr'
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);