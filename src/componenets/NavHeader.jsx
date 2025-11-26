const menuItemsWithLinks = [
  { id: 1, name: "CHARACTERS", link: "/characters" },
  { id: 2, name: "COMICS", link: "/comics" },
  { id: 3, name: "MOVIES", link: "/movies" },
  { id: 4, name: "TV", link: "/tv" },
  { id: 5, name: "GAMES", link: "/games" },
  { id: 6, name: "COLLECTIBLES", link: "/collectibles" },
  { id: 7, name: "VIDEOS", link: "/videos" },
  { id: 8, name: "FANS", link: "/fans" },
  { id: 9, name: "NEW", link: "/new" },
  { id: 10, name: "SHOP", link: "/shop" },
];

export default function () {
  return (
    <nav>
      <ul className="d-flex gap-15 wrap">
        {menuItemsWithLinks.map((obj) => (
          <li key={obj.id}>
            <a href={obj.link}>{obj.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
