const students = {
  list: [
    {
      id: '1',
      title: 'TV',
      price: 1000.1,
      image: '/images/1.jpg',
      description:
        'Am terminated it excellence invitation projection as. She graceful shy believed distance use nay. Lively is people so basket ladies window expect. Supply as so period it enough income he genius. Themselves acceptance bed sympathize get dissimilar way admiration son. Design for are edward regret met lovers. This are calm case roof and.',
    },
    {
      id: '2',
      title: 'Computer',
      price: 2000,
      image: '/images/2.jpg',
      description:
        'Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see. Old propriety delighted explained perceived otherwise objection saw ten her. Doubt merit sir the right these alone keeps. By sometimes intention smallness he northward. Consisted we otherwise arranging commanded discovery it explained. Does cold even song like two yet been. Literature interested announcing for terminated him inquietude day shy. Himself he fertile chicken perhaps waiting if highest no it. Continued promotion has consulted fat improving not way.',
    },
    {
      id: '3',
      image: '/images/3.jpg',
      title: 'Chair',
      price: 100,
      description:
        'Its sometimes her behaviour are contented. Do listening am eagerness oh objection collected. Together gay feelings continue juvenile had off one. Unknown may service subject her letters one bed. Child years noise ye in forty. Loud in this in both hold. My entrance me is disposal bachelor remember relation.',
    },
  ],
};
const handler = async ({ httpMethod }) => {
  return { statusCode: 200, body: JSON.stringify(students) };
};

module.exports = { handler };
