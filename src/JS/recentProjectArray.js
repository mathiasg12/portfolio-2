/**
 * array containing recent projects, used for the recent project cards on the landing page
 */
export const recentProjectArray = [
  {
    title: 'Semester project 2',
    id: 0,
    decription:
      'This is a website built for a fictional auction site called Bidhouse and is a school project. The site is responsive and is built with a mobile first approach, the site is responsive down to at least 280px width. The website consists of six pages, the landing page, sign-up page, login page, profile page, auction page, and the auction-specific page.',
    imageUrl: './images/sp2Img.png',
    builtWith: [
      { name: 'JS', svg: './svg/js-svgrepo-com.svg' },
      { name: 'HTML', svg: './svg/html-5-svgrepo-com.svg' },
      { name: 'SCSS', svg: './svg/scss2-svgrepo-com.svg' },
    ],
    liveSite: 'https://bid-house.netlify.app/',
    gitHub: 'https://github.com/mathiasg12/SP2',
  },
  {
    title: 'Exam 2 Holidaze',
    id: 1,
    decription:
      'This project is a website built for a fictional booking site called Holidaze and is a school exam. The site is responsive down to at least 270px and is built with a mobile-first approach using React, HTML, CSS modules, CSS, and JS. The site consists of six pages: the landing page, the login page, a sign-up page, a venue-specific page, a profile page, and a 404 page (not found page).',
    imageUrl: './images/holidazeScreenShot.png',
    builtWith: [
      { name: 'React', svg: './svg/react-1-logo-svgrepo-com.svg' },
      { name: 'JS', svg: './svg/js-svgrepo-com.svg' },
      { name: 'HTML', svg: './svg/html-5-svgrepo-com.svg' },
      { name: 'CSS modules', svg: './svg/w3_css-icon.svg' },
    ],
    liveSite: 'https://holidazzze.netlify.app/',
    gitHub: 'https://github.com/mathiasg12/exam-2-holidaze',
  },
  {
    title: 'E-shop ',
    id: 2,
    decription:
      'This is a website for a fictional e-commerce shop built using React and CSS modules. The store features five pages and one 404 "Page Not Found" page created with JSX. The project has products fetched by an API, a working cart, and a contact form with react-hook-form and Yup validation. the project has a layout component that contains the header and footer, the project uses react routes to navigate between pages.',
    imageUrl: './images/es.png',
    builtWith: [
      { name: 'React', svg: './svg/react-1-logo-svgrepo-com.svg' },
      { name: 'JS', svg: './svg/js-svgrepo-com.svg' },
      { name: 'HTML', svg: './svg/html-5-svgrepo-com.svg' },
      { name: 'CSS modules', svg: './svg/w3_css-icon.svg' },
    ],
    liveSite: 'https://ract-e-shop.netlify.app/',
    gitHub: 'https://github.com/mathiasg12/react-ca-mathiasg',
  },
];
