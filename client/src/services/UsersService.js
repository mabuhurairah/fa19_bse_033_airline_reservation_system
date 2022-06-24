import GenericService from "./GenericService";
class UsersService extends GenericService {
  constructor() {
    super();
  }
  addUser = (data) => this.post("users/register", data);
  deleteUser = (_id) => this.delete("users/" + _id);
  updateUser = (_id, data) => this.put("users/" + _id, data);
  getUsers = () => this.get("users");
  getSingleUser = (id) => this.get("users/" + id);
}

let userService = new UsersService();
export default userService;