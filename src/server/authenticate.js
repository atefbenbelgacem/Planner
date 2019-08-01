import uuid from "uuid";
import md5 from "md5";
import { connectDB } from "./connect-db";

const authenticationTokens = [];

async function assembleUserState(user) {
  let db = await connectDB();
  let tasks = await db
    .collection("tasks")
    .find({ owner: user.id })
    .toArray();
  let groups = await db
    .collection("groups")
    .find()
    .toArray();

  return {
    tasks,
    groups,
    session: { authenticated: "AUTHENTICATED", id: user.id }
  };
}

export const authenticationRoute = app => {
  app.post("/authentication", async (req, res) => {
    let { username, password } = req.body;
    let db = await connectDB();
    let collection = db.collection("users");
    let user = await collection.findOne({ name: username });
    if (!user) {
      console.log("user not found");
      return res.status(500).send("user not found");
    }

    let hash = md5(password);
    let passwordCorrect = hash === user.passwordHash;

    if (!passwordCorrect) {
      console.log("password incorrect");
      return res.status(500).send("password incorrect");
    }

    let token = uuid();
    authenticationTokens.push({
      token,
      userID: user.id
    });

    let state = await assembleUserState(user);
    res.status(200).send({ token, state });
  });
};
