module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

// module.exports = [
//   "strapi::errors",
//   {
//     name: "strapi::security",
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           "connect-src": ["'self'", "https:"],
//           "img-src": [
//             "'self'",
//             "data:",
//             "blob:",
//             "*.digitaloceanspaces.com"
//           ],
//           "media-src": ["'self'", "data:", "blob:"],
//           upgradeInsecureRequests: null,
//         },
//       },
//     },
//   },
//   "strapi::cors",
//   "strapi::poweredBy",
//   "strapi::logger",
//   "strapi::query",
//   "strapi::body",
//   "strapi::favicon",
//   "strapi::public",
// ];


// module.exports = ({ env }) => [
//   "strapi::errors",
//   "strapi::cors",
//   "strapi::poweredBy",
//   "strapi::logger",
//   "strapi::query",
//   "strapi::body",
//   "strapi::favicon",
//   "strapi::public",
//   {
//     name: "strapi::security",
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           "connect-src": ["'self'", "https:"],
//           "img-src": [
//             "'self'",
//             "data:",
//             "blob:",
//             `${env("DO_SPACE_BUCKET")}.${env("DO_SPACE_ENDPOINT")}`,
//           ],
//           "media-src": [
//             "'self'",
//             "data:",
//             "blob:",
//             `${env("DO_SPACE_BUCKET")}.${env("DO_SPACE_ENDPOINT")}`,
//           ],
//           upgradeInsecureRequests: null,
//         },
//       },
//     },
//   },
// ];