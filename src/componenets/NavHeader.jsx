const menuItemsWithLinks = [
  { id: 1, name: "CHARACTERS", link: "/characters", state: true },
  { id: 2, name: "COMICS", link: "/comics", state: false },
  { id: 3, name: "MOVIES", link: "/movies", state: true },
  { id: 4, name: "TV", link: "/tv", state: false },
  { id: 5, name: "GAMES", link: "/games", state: true },
  { id: 6, name: "COLLECTIBLES", link: "/collectibles", state: false },
  { id: 7, name: "VIDEOS", link: "/videos", state: true },
  { id: 8, name: "FANS", link: "/fans", state: true },
  { id: 9, name: "NEW", link: "/new", state: false },
  { id: 10, name: "SHOP", link: "/shop", state: true },
];

export default function NavHeader() {
  return (
    <nav>
      <ul className="d-flex gap-15 wrap">
        {menuItemsWithLinks.map((obj) => (
          <li className={obj.state ? "active" : ""} key={obj.id}>
            <a href={obj.link}>{obj.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
