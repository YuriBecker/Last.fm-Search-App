const formatMusicTime = seconds => {
  const minutes = Math.floor(seconds / 60);
  const leftSeconds = seconds - minutes * 60;
  const formatedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formatedLeftSeconds = leftSeconds < 10 ? `0${leftSeconds}` : leftSeconds;
  return `${formatedMinutes}:${formatedLeftSeconds}`.substring(0, 5);
};

export default formatMusicTime;
