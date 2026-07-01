import { User } from "./User";

// Readable & Maintainable & Testability
// Smart & Presentation Component
// Smart - Holds Data
// Presentation - Displays & Styles UI
// Smart
export function UserList() {
  const users = [
    {
      name: "Khan",
      pic: "https://imgcdn.stablediffusionweb.com/2024/3/16/d82676ea-288a-4e25-9ff8-4b202655f845.jpg",
    },
    {
      name: "Murangi",
      pic: "https://imgcdn.stablediffusionweb.com/2024/9/24/ed4d3b06-90f7-4d8d-ae20-9e6059147870.jpg",
    },
    {
      name: "Nolo",
      pic: "https://p16-seeyou-useast8.capcutcdn-us.com/tos-useast8-i-2zwwjm3azk-tx2/e3d3597bdbc846df9267944afbabc082~tplv-2zwwjm3azk-image.image",
    },
  ];
  return (
    <section>
      {users.map(({ name, pic }) => (
        <User name={name} pic={pic} />
      ))}
    </section>
  );
}
