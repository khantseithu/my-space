"use client";

const ProfileForm = ({ user }: any) => {
  const updateUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData);

    const updatedUser = {
      name: formData.get("name"),
      bio: formData.get("bio"),
      age: formData.get("age"),
      image: formData.get("image"),
    };
    console.log(updatedUser);

    const response = await fetch("/api/users", {
      method: "PUT",
      body: JSON.stringify(updatedUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await response.json();
  };
  return (
    <div>
      <h2>Edit your profile:</h2>
      <form onSubmit={updateUser}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          defaultValue={user.name ?? ""}
          id="name"
          name="name"
        />
        <label htmlFor="bio">Bio</label>
        <textarea
          defaultValue={user.bio ?? ""}
          id="bio"
          name="bio"
          cols={30}
          rows={10}
        />
        <label htmlFor="age">Age</label>
        <input type="text" name="age" defaultValue={user?.age ?? 0} />
        <label htmlFor="image">Image</label>
        <input type="text" name="image" defaultValue={user?.image ?? ""} />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};
export default ProfileForm;
