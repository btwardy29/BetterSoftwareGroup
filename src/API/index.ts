import axios from "axios";

const instance = axios.create({
  baseURL: "https://thebetter.bsgroup.eu/",
  headers: { "Content-Type": "application/json" },
});

export default {
  trialLogin: () =>
    instance({
      method: "post",
      url: `Authorization/SignIn`,
      data: {
        Device: {
          PlatformCode: "WEB",
          Name: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        },
      },
      transformResponse: [
        function (data) {
          const json = JSON.parse(data);

          data = {
            AuthorizationToken: json.AuthorizationToken,
            User: json.User,
          };

          return data;
        },
      ],
    }),

  userLogin: (data: { userName: string; password: string }) =>
    instance({
      method: "post",
      url: `Authorization/SignIn`,

      data: {
        Username: `${data.userName}`,
        Password: `${data.password}`,
        Device: {
          PlatformCode: "WEB",
          Name: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        },
      },
      transformResponse: [
        function (data) {
          const json = JSON.parse(data);
          data = {
            AuthorizationToken: json.AuthorizationToken,
            User: json.User,
          };

          return data;
        },
      ],
    }),

  getMedia: (Token?: string) =>
    instance({
      method: "post",
      url: `Media/GetMediaList`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${Token}`,
      },
      data: {
        MediaListId: 3,
        IncludeCategories: false,
        IncludeImages: true,
        IncludeMedia: false,
        PageNumber: 1,
        PageSize: 15,
        Device: {
          PlatformCode: "WEB",
          Name: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        },
      },
      transformResponse: [
        function (data) {
          const json = JSON.parse(data);
          data = json.Entities;

          return data;
        },
      ],
    }),
};

// export const fetchData = async () => {
//   let data = {};
//   try {
//     await axios({
//       method: "post",
//       url: "https://thebetter.bsgroup.eu/Authorization/SignIn",
//       headers: { "Content-Type": "application/json" },
//       data: {
//         Device: {
//           PlatformCode: "WEB",
//           Name: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
//         },
//       },
//     }).then((res) => (data = res.data));
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };
