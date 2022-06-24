import GenericService from "./GenericService";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

class UserLoginService extends GenericService {
    constructor() {
        super();
    }

    login = (email,password) => new Promise((resolve,reject) => {
        this.post("users/login", {email,password})
        .then((token) => {
            localStorage.setItem("token",token);
            resolve(token);
        })
        .catch((err) => {
            reject(err);
            toast.error(err.response.data, {
                position: "bottom-right",
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });
    });

    register = (fullName,contactNumber,email,password) => new Promise((resolve,reject) => {
        this.post("users/register", {fullName,contactNumber,email,password})
        .then(() => {
            resolve();
        })
        .catch((err) => {
            reject();
            console.log(err);
            toast.error(err.response.data, {
                position: "bottom-right",
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });
    });
    
    logout = () => {
        localStorage.removeItem("token");
    }; 

    isLoggedIn = () => {
        return localStorage.getItem("token") ? true : false;
    };

    getLoggedInUser = () => {
        try {
            const jwt = localStorage.getItem("token");
            return jwtDecode(jwt);
        } 
        catch (ex) {
            return null;
        }
    };

    isAdmin = () => {
        if (this.isLoggedIn()) {
            if (this.getLoggedInUser().role == "admin") return true;
            else return false;
        } else return false;
    };
}

let userLoginService = new UserLoginService;
export default userLoginService;