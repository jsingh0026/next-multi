arr = ['store1', 'store2']

module.exports = {
  tenants: [
    {
      name: 'englishsetterlovers',
      domains: [
        {
          development: 'local.foodle.com',
          production: 'englishsetterlovers.krabs.micheleriva.com',
        },
      ],
    },
    {
      name: 'englishsetterlovers',
      domains: [
        {
          development: new RegExp(`local\.(${arr.join('|')})\.com`),
          production: /(cabbage|pumpkin|veggies)\.krabs\.eat\.micheleriva\.com/,
        },
      ],
    },
  ],
};
