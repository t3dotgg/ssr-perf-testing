export default function Content(props: any) {
  const renderedAt = new Date();
  const timeElapsed = renderedAt.getTime() - props.startedAt;

  const requestLatency = "request-latency";
  const fillId = "fill-with-render-time";
  const perfFullTime = "perf-full";

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      {props.children}
      <h1>Profile: {props.login}</h1>
      <h2>Time to respond on backend: {props.endedAt - props.startedAt}ms</h2>
      <h2>Time to render on backend: {timeElapsed}ms</h2>
      <h2>
        Request latency (request to edge time, requires ssr):{" "}
        <span id={requestLatency} />
        ms
      </h2>
      <h2>
        Time from server request to CLIENT render: <span id={fillId} />
        ms
      </h2>
      <h2>
        Request-to-paint time (Chrome only): <span id={perfFullTime} />
        ms
      </h2>
      <script>{`
      const currentTime = new Date();

      // Server latency
      const latencyTime = ${props.startedAt} - window.performance.timing.requestStart;
      document.getElementById(\`${requestLatency}\`).innerHTML = latencyTime;

      // Request to paint time
      const timeFromRequestReceived = currentTime.getTime() - ${props.startedAt};
      document.getElementById(\`${fillId}\`).innerHTML = timeFromRequestReceived;

      // round trip time
      const fullTime = currentTime - window.performance.timing.requestStart;
      document.getElementById(\`${perfFullTime}\`).innerHTML = fullTime;
      `}</script>
    </div>
  );
}
