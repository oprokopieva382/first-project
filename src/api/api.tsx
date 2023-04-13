import axios from "axios";

let instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "1d7f71fc-83ac-4812-97b9-a3bc6a3f029f",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data);
  },
  followUser(id: number) {
    return instance.post(
      `follow/${id}`
    );
  },

  unfollowUser(id: number) {
    return instance.delete(
      `follow/${id}`
    );
  },

  getProfile(userId: string) {
    return instance.get(
      `profile/` + userId
    );
  },
};
export const authAPI = {
  authMe() {
    return instance.get(`auth/me`);
  },
};