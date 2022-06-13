export default function Content(props: any) {
  const renderedAt = new Date();
  const timeElapsed = renderedAt.getTime() - props.startedAt;

  console.log("content?", props);

  const fillId = "fill-with-render-time";

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Profile: {props.login}</h1>
      <h2>
        Request that generated this page was STARTED at: {props.startedAt}
      </h2>
      <h2>Request that generated this page COMPLETED at: {props.endedAt}</h2>
      <h2>
        Request that generated this page RENDERED at: {renderedAt.getTime()}
      </h2>
      <h2>Time to respond on backend: {props.endedAt - props.startedAt}</h2>
      <h2>Time to render on backend: {timeElapsed}</h2>
      <h2>
        Time from initial request to CLIENT render: <div id={fillId} />
      </h2>
      <script>{`
      const currentTime = new Date();
      const timeElapsed = currentTime.getTime() - ${props.startedAt};
      console.log(1);
      document.getElementById(\`${fillId}\`).innerHTML = timeElapsed;
      `}</script>
    </div>
  );
}
