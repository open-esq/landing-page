import BlogImage1 from '../../assets/image/agency/blog/income-share.jpg';
import BlogImage2 from '../../assets/image/agency/blog/term-sheet.jpg';
import BlogImage3 from '../../assets/image/agency/blog/llc-dao.jpg';
import Member1 from '../../assets/image/agency/team/ross.jpg';
import Member2 from '../../assets/image/agency/team/robb.png';
import Member3 from '../../assets/image/agency/team/josh.jpg';
import Denny from '../../assets/image/agency/client/denny.png';
import Menny from '../../assets/image/agency/client/menny.png';

const data = {
  menuItems: [
    {
      label: 'Home',
      path: '#banner_section',
      offset: '0',
    },
    {
      label: 'Services',
      path: '#feature_section',
      offset: '0',
    },
    {
      label: 'Portfolio',
      path: '#blogSection',
      offset: '0',
    },
    {
      label: 'Pricing',
      path: "#pricing_section",
      offset: '0',
    },
    {
      label: 'Team',
      path: '#teamSection',
      offset: '0',
    },

    {
      label: 'Contact',
      path: '#contactSection',
      offset: '0',
    },
  ],
  pricingTable: [
    {
      name: 'Smart OpenLaw Agreement',
      description: "Convert your existing contract into a smart legal agreement that can be electronically signed using email and MetaMask",
      price: '$20/page',
      priceLabel: 'Per month & subscription yearly',
      buttonLabel: 'Get in Touch',
      url: '#contactSection',
      listItems: [
        {
          content: 'Drag & Drop Builder',
        },
        {
          content: '1,000s of Templates Ready',
        },
        {
          content: 'Blog Tools',
        },
        {
          content: 'eCommerce Store ',
        },
        {
          content: '30+ Webmaster Tools',
        },
      ],
    },
    {
      name: 'Technical Consultation',
      description: 'Hire us for a technical consultation on your OpenLaw project',
      price: '$325/hr',
      priceLabel: 'Per month & subscription yearly',
      buttonLabel: 'Get in Touch',
      url: '#contactSection',
      listItems: [
        {
          content: 'Drag & Drop Builder',
        },
        {
          content: '1,000s of Templates Ready',
        },
        {
          content: 'Blog Tools',
        },
        {
          content: 'eCommerce Store ',
        },
        {
          content: '30+ Webmaster Tools',
        },
      ],
    },
  ],
  aboutus: [
    {
      id: 1,
      title: 'Amazing communication experience.',
      icon: 'flaticon-next',
    },
    {
      id: 2,
      title: 'Best designing experience with trending tools and sizes.',
      icon: 'flaticon-next',
    },
    {
      id: 3,
      title: 'Training and communication method remotely.',
      icon: 'flaticon-next',
    },
    {
      id: 4,
      title: '24/7 Hour onine supports.',
      icon: 'flaticon-next',
    },
  ],
  features: [
    {
      id: 1,
      icon: 'flaticon-group',
      title: 'DAO Creation',
      description:
        'We help organize your decentralized organization or startup in a legally compliant manner',
    },
    {
      id: 2,
      icon: 'flaticon-bitcoin',
      title: 'Secondary Markets',
      description:
        'We help tokenize claims to future earnings and provide a market for people to trade them',
    },
    {
      id: 3,
      icon: 'flaticon-startup',
      title: 'Startup Crowdfunding',
      description:
        'We provide a portal to allow retail investors to crowdfund your startup. COMING SOON ON PRIMAL.',
    },
  ],
  qualityFeature: [
    {
      id: 1,
      icon: 'flaticon-flask',
      title: 'Tokenization & Secondary Markets',
      description:
        "We'll upload your assets to the Ethereum blockchain using customized tokenization solutions.",
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'Business Re-tooling',
      description:
        "We'll reboot your business to take advantage of open finance tools on Ethereum, like forming limited liability DAOs, deploying smart contracts, and launching custom dApps.",
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      title: 'Workflow Design',
      description:
        "We'll consult on and design more efficient ways to accomplish your business and legal workflow with smart deal templates on OpenLaw.",
    },
    {
      id: 4,
      icon: 'flaticon-briefing',
      title: 'Project Diligence',
      description:
        "We'll review your proposed retail token sale for adherence to the Consumer Token Framework as well as provide other content and technical diligence reviews.",
    },
  ],
  blog: [
    {
      id: 1,
      title: 'Income Share Portal',
      thumbnail_url: BlogImage1,
      date: 'enable legally enforceable income share agreements and trade them',
      postLink: 'https://incomeshare.me',
    },
    {
      id: 2,
      title: 'Y-Combinator Termsheets.',
      thumbnail_url: BlogImage2,
      date: 'connecting VCs and start-up founders',
      postLink: 'https://termsheets.me',
    },
    {
      id: 3,
      title: 'LLC-DAO',
      thumbnail_url: BlogImage3,
      date: 'First ever Limited Liability DAO',
      postLink: 'https://app.openlaw.io/template/DAO-LLC%20Operating%20Agreement%20(DAOscrow)',
    },
  ],
  teamMember: [
    {
      id: 1,
      name: 'Ross Campbell',
      thumbnail_url: Member1,
      designation: 'Co-founder/Legal Engineer',
      social_links: [
        'flaticon-facebook-logo',
        'flaticon-twitter-logo-silhouette',
        'flaticon-instagram',
        'flaticon-dribble-logo',
      ],
    },
    {
      id: 2,
      name: 'Robert Leonhard',
      thumbnail_url: Member2,
      designation: 'Co-founder/Legal Engineer',
      social_links: [
        'flaticon-twitter-logo-silhouette',
        'flaticon-instagram',
        'flaticon-facebook-logo',
        'flaticon-dribble-logo',
      ],
    },
    {
      id: 3,
      name: 'Josh Ma',
      thumbnail_url: Member3,
      designation: 'Co-founder/Legal Engineer',
      social_links: [
        'flaticon-dribble-logo',
        'flaticon-twitter-logo-silhouette',
        'flaticon-instagram',
        'flaticon-facebook-logo',
      ],
    },
  ],
  testimonial: [
    {
      id: 1,
      name: 'Denny Albuz',
      designation: 'CEO of Denish Co.',
      comment:
        'Best working experience  with this amazing team & in future, we want to work together',
      avatar_url: Denny,
    },
    {
      id: 2,
      name: 'Roman Ul Oman',
      designation: 'Co-founder of QatarDiaries',
      comment:
        'Impressed with master class support of the team and really look forward for the future.',
      avatar_url: Menny,
    },
    {
      id: 3,
      name: 'Caroleane Mina',
      designation: 'Director of Beauty-queen',
      comment:
        'I have bought more than 10 themes on ThemeForest, and this is the first one I review. Wow! Amazing React Theme',
      avatar_url: Denny,
    },
    {
      id: 4,
      name: 'Roman Ul Oman',
      designation: 'Co-founder of QatarDiaries',
      comment:
        'Impressed with master class support of the team and really look forward for the future.',
      avatar_url: Menny,
    },
  ],
  faq: [
    {
      id: 1,
      expend: true,
      title: 'How to contact with Customer Service?',
      description:
        'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
    },
    {
      id: 2,
      title: 'App installation failed, how to update system information?',
      description:
        'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
    },
    {
      id: 3,
      title: 'Website reponse taking time, how to improve?',
      description:
        'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
    },
    {
      id: 4,
      title: 'New update fixed all bug and issues?',
      description:
        'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
    },
  ],
  menuWidget: [
    {
      id: 1,
      title: 'About Us',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Support Center',
        },
        {
          id: 2,
          url: '#2',
          text: 'Customer Support',
        },
        {
          id: 3,
          url: '#3',
          text: 'About Us',
        },
        {
          id: 4,
          url: '#4',
          text: 'Copyright',
        },
        {
          id: 5,
          url: '#5',
          text: 'Popular Campaign',
        },
      ],
    },
    {
      id: 2,
      title: 'Our Information',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Return Policy',
        },
        {
          id: 2,
          url: '#2',
          text: 'Privacy Policy',
        },
        {
          id: 3,
          url: '#2',
          text: 'Terms & Conditions',
        },
        {
          id: 4,
          url: '#4',
          text: 'Site Map',
        },
        {
          id: 5,
          url: '#5',
          text: 'Store Hours',
        },
      ],
    },
    {
      id: 3,
      title: 'My Account',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Press inquiries',
        },
        {
          id: 2,
          url: '#2',
          text: 'Social media directories',
        },
        {
          id: 3,
          url: '#3',
          text: 'Images & B-roll',
        },
        {
          id: 4,
          url: '#4',
          text: 'Permissions',
        },
        {
          id: 5,
          url: '#5',
          text: 'Speaker requests',
        },
      ],
    },
    {
      id: 4,
      title: 'Policy',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Application security',
        },
        {
          id: 2,
          url: '#2',
          text: 'Software principles',
        },
        {
          id: 3,
          url: '#3',
          text: 'Unwanted software policy',
        },
        {
          id: 4,
          url: '#4',
          text: 'Responsible supply chain',
        },
      ],
    },
  ],
  social_profile: [
    {
      id: 1,
      icon: 'flaticon-facebook-logo',
      link: '#1',
    },
    {
      id: 2,
      icon: 'flaticon-twitter-logo-silhouette',
      link: '#2',
    },
    {
      id: 3,
      icon: 'flaticon-instagram',
      link: '#3',
    },
    {
      id: 4,
      icon: 'flaticon-tumblr-logo',
      link: '#4',
    },
    {
      id: 5,
      icon: 'flaticon-dribble-logo',
      link: '#5',
    },
  ],
};
export default data;
