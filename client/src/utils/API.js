import axios from "axios";

export default {
  // Gets all categories
  getCategories: category => {
      return axios.get("/api/user/" + category.UserUuid +"/category/");
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
        // .then(json => {
        //     (json)
        // })
        .catch(error => {
            console.log("ERROR", error);
        });
  },
  deleteCategory: category => {
    //   return axios.delete("api/user/" + category.userId + "/", category)
    // console.log(category.UserUuid)
    // console.log(category.id)
    fetch("/api/user/" + category.UserUuid + "/category/" + category.id, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(category),
        mode: 'cors'
    })
        .then(data => { return data })
        // .then(json => {
        //     (json)
        // })
        .catch(error => {
            console.log("ERROR", error);
        });
  },
  editCategory: function(category) {
      return axios.put("api/user/" + category.userId + "/", category)
  },
    // Gets all booksmarks of category
    getBookmarks: category => {
        return axios.get("/api/user/" + category.UserUuid +"/category/" + category.CategoryId+"/bookmark");
    },

    saveBookmark: bookmark => {
        console.log('saveBookmark: bookmark', bookmark)
        fetch("/api/user/" + bookmark.UserUuid + "/bookmark/", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(bookmark),
            mode: 'cors'
        })
            .then(data => { return data })
            // .then(json => {
            //     (json)
            // })
            .catch(error => {
                console.log("ERROR", error);
            });
      }
};
