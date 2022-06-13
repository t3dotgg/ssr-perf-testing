export default function Index() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <a href="/3p-direct">Hit github directly through loader</a>
      <div style={{ marginTop: "1rem" }} />
      <a href="/3p-indirect">Hit github indirectly through cdn cache</a>
      <div style={{ marginTop: "1rem" }} />
      <a href="/3p-cached-page">
        Hit Remix cached page w/ direct github loader
      </a>
    </div>
  );
}
