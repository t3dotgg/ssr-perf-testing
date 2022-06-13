export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <a href="/3p-direct">Hit github directly through loader</a>
      <a href="/3p-indirect">Hit github indirectly through cdn cache</a>
    </div>
  );
}
