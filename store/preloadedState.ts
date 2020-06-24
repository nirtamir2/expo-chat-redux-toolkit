export const preloadedState = {
  friends: {
    A: {
      name: "Nir",
      avatarUrl: "asdasd"
    }
  },
  chats: {
    A: {
      messages: [
        { isIncoming: true, content: "HI", timestamp: Date.now() },
        { isIncoming: false, content: "HI", timestamp: Date.now() }
      ]
    }
  }
};
