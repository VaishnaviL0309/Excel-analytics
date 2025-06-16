import React from 'react';

const Profile = () => {
  // For now static - later you can show real user data here
  const dummyUser = {
    name: 'Vaishnavi',
    email: 'vaishnavi@example.com'
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <p className="mb-2">
        <strong>Name:</strong> {dummyUser.name}
      </p>
      <p>
        <strong>Email:</strong> {dummyUser.email}
      </p>
    </div>
  );
};

export default Profile;
