/**
 * array containing recent projects, used for the recent project cards on the landing page
 */
export const recentProjectArray = [
  {
    title: 'Semester project 2',
    decription:
      'This is a website built for a fictional auction site called Bidhouse and is a school project. The site is responsive and is built with a mobile first approach, the site is responsive down to at least 280px width. The website consists of six pages, the landing page, sign-up page, login page, profile page, auction page, and the auction-specific page. The header has a logo and navigation elements. The header for mobile has a hamburger menu and for desktop it is links. the header changes depending on whether the user is logged in or not, if a user is logged in the navigation elements consist of links to the auction page, profile page, logout, and credit, if they are not logged in the header elements consist of login, signup, auctions.',
    imageUrl: './images/sp2Img.png',
    builtWith: [
      { name: 'JS', svg: './svg/js-svgrepo-com.svg' },
      { name: 'HTML', svg: './svg/html-5-svgrepo-com.svg' },
      { name: 'SCSS', svg: './svg/scss2-svgrepo-com.svg' },
    ],
    liveSite: 'https://bid-house.netlify.app/',
    gitHub: 'https://github.com/mathiasg12/SP2',
  },
];
