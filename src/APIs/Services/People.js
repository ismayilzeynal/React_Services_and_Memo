import { HttpClient } from "../HttpClient";

class UserService extends HttpClient {
  constructor() {
    super("https://636398d98a3337d9a2e1d68d.mockapi.io/jirono");
  }

  getAllPosts() {
    return this.get("users");
  }

  postNewPosts(body) {
    return this.post("users", body);
  }

  editPost(id, body) {
    return this.put("users", body, id);
  }
}

export const UserService = new UserService();