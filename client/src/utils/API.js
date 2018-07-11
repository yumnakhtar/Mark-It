import axios from "axios";

export default {
  // Gets all categories
  getCategories: () => {
      return axios.get("http://localhost:8000/api/user/6e91a560-80a8-11e8-a8aa-71792012fa45/category/");
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
