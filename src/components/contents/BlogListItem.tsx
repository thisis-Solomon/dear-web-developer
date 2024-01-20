type BlogListItemProps = {
  title: string;
  date: string | null;
  content: string;
};

export default function BlogListItem({
  title,
  date,
  content,
}: BlogListItemProps): JSX.Element {
  return (
    <div className="border border-stone-400/15 px-6 py-4 hover:bg-stone-100/15 cursor-pointer rounded-md">
      <h1 className="font-bold text-2xl hover:underline">{title}</h1>
      <p className="py-4 text-stone-500">{date}</p>
      <div>
        <article className="text-stone-700 max-w-3xl break-words line-clamp-3">
          {content}
        </article>
        <a
          className="text-sky-600 inline-block pt-4 hover:underline"
          href="#"
          target="_parent"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
