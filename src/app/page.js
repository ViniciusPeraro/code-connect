export default async function Home({ searchParams }) {
  const pageParam = Array.isArray(searchParams?.page)
    ? searchParams.page[0]
    : searchParams?.page;

  const currentPage = parseInt(pageParam || "1", 10);

  const searchQuery = Array.isArray(searchParams?.q)
    ? searchParams.q[0]
    : searchParams?.q || "";

  const { data: posts = [], prev, next } = await getAllPosts(currentPage, searchQuery);

  return (
    <main className={styles.grid}>
      {posts?.map(post => (
        <CardPost key={post.id} post={post}/>
      ))}

      <div className={styles.pagination}>
        {prev && (
          <Link href={{ pathname: "/", query: { page: prev, q: searchQuery } }}>
            Página Anterior
          </Link>
        )}

        {next && (
          <Link href={{ pathname: "/", query: { page: next, q: searchQuery } }}>
            Próxima Página
          </Link>
        )}
      </div>
    </main>
  );
}