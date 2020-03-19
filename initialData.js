module.exports = async keystone => {
  try {
    await keystone.createItems({
      User: [
        {
          isAdmin: true,
          name: "Admin",
          email: "admin1@codeforafrica.org",
          password: process.env.INIT_ADMIN_PASSWORD
        }
      ]
    });
  } catch {}
};
