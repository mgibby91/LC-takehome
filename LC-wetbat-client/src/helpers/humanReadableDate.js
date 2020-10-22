
export default function humanReadableDate(SQLdate) {

  const date = new Date(SQLdate).toString().split(' ');
  return `${date[1]} ${date[2]}, ${date[3]}`;

}