module.exports = async keystone => {
  await keystone.createItems({
    User: [
      {
        name: "Admin",
        email: "admin@codeforafrica.org",
        isAdmin: true,
        password: process.env.INIT_ADMIN_PASSWORD
      }
    ]
  });
};
