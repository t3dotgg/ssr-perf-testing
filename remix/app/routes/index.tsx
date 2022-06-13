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
      <a style={{ fontSize: 18 }} href="/3p-direct">
        Hit github directly through loader
      </a>
      <div style={{ marginTop: "1rem" }} />
      <a style={{ fontSize: 18 }} href="/3p-indirect">
        Hit github indirectly through cdn cache
      </a>
      <div style={{ marginTop: "1rem" }} />
      <a style={{ fontSize: 18 }} href="/3p-cached-page">
        Hit Remix cached page w/ direct github loader
      </a>

      <div style={{ marginTop: "2rem" }} />
      <a href="https://github.com/TheoBr/ssr-perf-testing">Github repo</a>
    </div>
  );
}
