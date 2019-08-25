import axios from "axios";

export default {
  // Gets the racer with the given id
  getRacer: function(id) {
    return axios.get("/api/racer/" + id);
  },
  // Gets the map with the given id
   getMap: function(id) {
    return axios.get("/api/map/" + id);
  },
  // Saves a racer to the database
  saveRacer: function(racerId) {
    return axios.post("/api/racer", racerId);
  },
  // Saves a racer to the database
  saveMap: function(mapId) {
    return axios.post("/api/map", mapId);
  },
  login: function(userData) {
    return axios.post("/api/users/login", userData)
  },
  register: function(userData) {
    return axios.post("/api/users/register", userData)
  }
};