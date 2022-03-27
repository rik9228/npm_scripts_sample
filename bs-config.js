module.exports = {
  files: "./dist/**/*", //監視するファイルを指定
  server: {
    baseDir: "./",
    routes: {
      "/dist": "dist",
    },
  },
  startPath: "/dist",
  proxy: false,
  port: 8000, //使用するポート番号
};
