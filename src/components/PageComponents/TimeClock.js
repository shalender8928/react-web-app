const Clock = ({ color, time }) =>  {
  return (
    <span style={{ color: color }}>
      {time}
    </span>
  );
}

export default Clock;