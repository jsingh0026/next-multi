module.exports = {
  tenants: [
    {
      name: 'englishsetterlovers',
      domains: [
        {
          development: 'local.foodle.com',
          prod: 'englishsetterlovers.krabs.micheleriva.com',
        },
      ],
    },
    {
      name: 'veggies',
      domains: [
        {
          development: /local\.(store1|store2)\.eat\.com/,
          prod: /(cabbage|pumpkin|veggies)\.krabs\.eat\.micheleriva\.com/,
        },
      ],
    },
  ],
};
