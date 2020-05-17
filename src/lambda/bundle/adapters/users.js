const usersToDb = (fields) => {
  const map = {
    id: 'user_id',
    role: 'role_id',
    accountStatus: 'account_status_id',
    accountType: 'account_type_id',
    firstName: 'first_name',
    lastName: 'last_name',
  };

  return fields.map((field) => (map[field] ? map[field] : field));
};

const usersFromDb = (rows) => {
  const map = {
    user_id: 'id',
    role_id: 'role',
    account_status_id: 'accountStatus',
    account_type_id: 'accountType',
    first_name: 'firstName',
    last_name: 'lastName',
  };

  return rows.map((row) => {
    return Object.entries(row).map(([key, value]) => {
      return { [map[key] || key]: value };
    });
  });
};

module.exports = {
  usersToDb,
  usersFromDb,
};
