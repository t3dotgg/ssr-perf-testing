export default function Content(props: any) {
  const renderedAt = new Date();
  const timeElapsed = renderedAt.getTime() - props.startedAt;

  console.log("content?", props);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Profile: {props.login}</h1>
      <h2>
        Request that generated this page was STARTED at: {props.startedAt}
      </h2>
      <h2>Request that generated this page COMPLETED at: {props.endedAt}</h2>
      <h2>Time to respond on backend: {props.endedAt - props.startedAt}</h2>
      <h2>Time to render: {timeElapsed}</h2>
    </div>
  );
}
