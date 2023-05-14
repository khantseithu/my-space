import prisma from "@/lib/prisma";

interface UserPageProps {
  params: {
    id: string;
    name: string | null;
    image: string | null;
    bio: string | null;
    age: number | null;
  };
}

async function UserPage({ params }: UserPageProps) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, image, bio, age } = user ?? {};

  console.log(user);
  return (
    <div>
      <h1>{name}</h1>
      <img width={300} src={image ?? "/mememan.webp"} alt={name ?? "avatar"} />
      <h3>Bio</h3>
      <p>{bio}</p>
      <p>Age: {age}</p>
    </div>
  );
}
export default UserPage;
