type ListItemProps = {
  title: string;
};

function ListItem({ title }: ListItemProps): JSX.Element {
  return <li className="border px-2 py-1 rounded-lg">{title}</li>;
}

export default function Sidebar(): JSX.Element {
  return (
    <aside className="border-r-2 border-stone-300/20 h-screen pr-10 py-5">
      <form>
        <input
          className="border px-2 py-1 text-lg rounded-lg mb-8"
          type="text"
          placeholder="search"
        />
      </form>
      <div>
        <p className="text-stone-500 mb-2">Filter by: </p>
        <ul className="flex gap-2 flex-wrap items-center">
          <ListItem title="Letters" />
          <ListItem title="Tech Trending" />
          <ListItem title="Tips" />
        </ul>
      </div>
    </aside>
  );
}
