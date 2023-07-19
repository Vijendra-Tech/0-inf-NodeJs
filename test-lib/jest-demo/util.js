const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const users = [
  { email: "goku@test.com", id: 1, name: "Goku", verified: false },
];

const getNewUser = async (id) => {
  await delay(100);
  const user = users.find((u) => u.id === id);

  if (!user) throw new Error("User does not exist");
  return user;
};

const mapObjectToArray = (o, cb) => {
  const results = [];

  for (const [k, v] of Object.entries(o)) {
    results.push(cb(k, v, o));
  }

  return results;
};

// mapObjectToArray({ a: "1", b: "2" }, () => {});
module.exports = { getNewUser, mapObjectToArray };
