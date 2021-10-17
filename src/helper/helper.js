// export default function helper() {

//   const prefixDefaultApi = "http://localhost:3000"

//   function handleWorksPost(params, page) {
//   const queryParams = "?page=".concat(page)

//   const requestOptions = { 
//     method: "POST",
//     body: params,
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//     }
//   };
//   return fetch(prefixDefaultApi.concat("http://localhost:3000/works").concat(queryParams), requestOptions)
//     .then(res => console.log(res))
//   }
  
//   function handleWorksGet() {
//     const requestOptions = { method: "GET" };
//     return fetch(prefixDefaultApi.concat("http://localhost:3000/works"), requestOptions)
//       .then(res => console.log(res))
//   }
  
//   function handleWorksByIdGet() {
//     const requestOptions = { method: "GET" };
//     return fetch(prefixDefaultApi.concat("/works/:id"), requestOptions)
//       .then(res => console.log(res))
//   }

//   function handleWorksPut(params, page) {
//     const queryParams = "?page=".concat(page)
  
//     const requestOptions = { 
//       method: "PUT",
//       body: params,
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//       }
//     };
//     return fetch(prefixDefaultApi.concat("/works/change/:id").concat(queryParams), requestOptions)
//       .then(res => console.log(res))
//   }

//   function handleWorksDelete(params, page) {
//     const queryParams = "?page=".concat(page)
  
//     const requestOptions = { 
//       method: "DELETE",
//       body: params,
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//       }
//     };
//     return fetch(prefixDefaultApi.concat("/works/delete/:id").concat(queryParams), requestOptions)
//       .then(res => console.log(res))
//   }

//   function handleUsersPost(params, page) {
//     const queryParams = "?page=".concat(page)
  
//     const requestOptions = { 
//       method: "POST",
//       body: params,
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//       }
//     };
//     return fetch(prefixDefaultApi.concat("/users").concat(queryParams), requestOptions)
//       .then(res => console.log(res))
//   }
  
//   function handleUsersGet() {
//     const requestOptions = { method: "GET" };
//     return fetch(prefixDefaultApi.concat("/users"), requestOptions)
//       .then(res => console.log(res))
//   }
  
//   function handleUsersByIdGet() {
//     const requestOptions = { method: "GET" };
//     return fetch(prefixDefaultApi.concat("/users/:id"), requestOptions)
//       .then(res => console.log(res))
//   }

//   function handleUsersPut(params, page) {
//     const queryParams = "?page=".concat(page)
  
//     const requestOptions = { 
//       method: "PUT",
//       body: params,
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//       }
//     };
//     return fetch(prefixDefaultApi.concat("/users/change/:id").concat(queryParams), requestOptions)
//       .then(res => console.log(res))
//   }

//   function handleUsersDelete(params, page) {
//     const queryParams = "?page=".concat(page)
  
//     const requestOptions = { 
//       method: "DELETE",
//       body: params,
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//       }
//     };
//     return fetch(prefixDefaultApi.concat("/users/delete/:id").concat(queryParams), requestOptions)
//       .then(res => console.log(res))
//   }
  
// }
