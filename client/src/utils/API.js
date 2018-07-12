import axios from "axios";

export default {
  // Gets all categories
  getCategories: () => {
      console.log("document.cookie: ",document.cookie);
      return axios.get("/api/user/099bd650-8600-11e8-bc00-13a4fbee32c3/category/");
  },
  saveCategory: category => {
    fetch("/api/user/" + category.userId + "/category/", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(category),
        mode: 'cors'
    })
        .then(data => { return data })
        .then(json => {
            (json)
        })
        .catch(error => {
            console.log("ERROR", error);
        });
  },
  deleteCategory: category => {
    //   return axios.delete("api/user/" + category.userId + "/", category)
    console.log(category.UserUuid)
    console.log(category.name)
    fetch("/api/user/" + category.UserUuid + "/category/" + category.name, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(category),
        mode: 'cors'
    })
        .then(data => { return data })
        .then(json => {
            (json)
        })
        .catch(error => {
            console.log("ERROR", error);
        });
  },
  editCategory: function(category) {
      return axios.put("api/user/" + category.userId + "/", category)
  }
};
