// used for development
const defaultData = {
  timers: [
    {
      id: 0,
      name: "Chemex",
      ratio: 16.67,
      defaultCoffeeWeight: 30, // always save this, never water amount.
      defaultTimer: true,
      description:
        "The Chemex is a great new way to brew coffee. I just need words so I am typeing.",
      totalTime: 200000,
      pourPoints: [
        {
          fixed: true,
          startsAt: 0,
          pourToPercentage: 0.1,
        },
        {
          fixed: false,
          startsAt: 105000,
          pourToPercentage: 0.2,
        },
        {
          fixed: false,
          startsAt: 135000,
          pourToPercentage: 0.5,
        },
        {
          fixed: false,
          startsAt: 150000,
          pourToPercentage: 1,
        },
      ],
    },
    {
      id: 1,
      name: "Harrio v60",
      ratio: 16.67,
      defaultCoffeeWeight: 40,
      defaultTimer: true,
      description:
        "The Chemex is a great new way to brew coffee. I just need words so I am typeing.",
    },
    {
      id: 2,
      name: "Harrio v60",
      ratio: 16.67,
      defaultCoffeeWeight: 40,
      defaultTimer: true,
      description:
        "The Chemex is a great new way to brew coffee. I just need words so I am typeing.",
    },
    {
      id: 3,
      name: "Harrio v60",
      ratio: 16.67,
      defaultCoffeeWeight: 40,
      defaultTimer: false,
      description:
        "The Chemex is a great new way to brew coffee. I just need words so I am typeing.",
    },
    {
      id: 4,
      name: "Harrio v60",
      ratio: 16.67,
      defaultCoffeeWeight: 40,
      defaultTimer: false,
      description:
        "The Chemex is a great new way to brew coffee. I just need words so I am typeing.",
    },
  ],
}

export default defaultData
