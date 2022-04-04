module.exports = ({env}) => ({
  // ...
  upload: {
    config: {
      provider: "strapi-provider-upload-do",
      providerOptions: {
        key: 'TNVWGLDCSMFHNFGLL6D3',
        secret: 'UnqqnksyeheWKKhhJ+3xTN2btfOHBy//VR5h2RqP4/4',
        endpoint: 'fra1.digitaloceanspaces.com',
        space: 'v-space',
        // directory: "media", // optional
      },
    },
  },
  // ...
});
