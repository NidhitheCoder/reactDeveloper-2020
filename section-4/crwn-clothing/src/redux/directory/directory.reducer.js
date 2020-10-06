const INITIAL_STATE = {
  sections: [
    {
      title: "HATS",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "hats"
    },
    {
      title: "SNEAKERS",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 2,
      linkUrl: ""
    },
    {
      title: "JEANS",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 3,
      linkUrl: ""
    },
    {
      title: "WOMENS",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      size: "large",
      id: 4,
      linkUrl: ""
    },
    {
      title: "MENS",
      size: "large",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 5,
      linkUrl: ""
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
