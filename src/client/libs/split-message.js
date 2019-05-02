const regex = /(\b.{1,40}(\s|$))\s*/g;

export default message => {
  if (message.length < 50) {
    return [message];
  }
    
  const chunks = message.match(regex);
  const totalPart = chunks.length;

  return chunks.map((chunk, idx) => `${idx + 1}/${totalPart} ${chunk}`);
}
