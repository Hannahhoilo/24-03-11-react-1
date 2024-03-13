function Time() {
  const currentTime = new Date().getHours();

  console.log(currentTime);

  return <h2>{currentTime < 12 ? "Good Morning!🌅" : "Good Afternoon!🌇"}</h2>;
}

export default Time;
