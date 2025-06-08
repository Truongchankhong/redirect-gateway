// pages/index.js

export async function getServerSideProps({ res }) {
  const nowUtc = new Date();                    // giờ UTC
  const offsetHrs = 7;                          // +7 giờ cho Việt Nam
  // Tính giờ VN theo UTC + 7
  const localHour   = (nowUtc.getUTCHours() + offsetHrs) % 24;
  const localMinute = nowUtc.getUTCMinutes();
  const totalMinutes = localHour * 60 + localMinute;

  const isDay = totalMinutes >= 6 * 60 && totalMinutes <= 18 * 60;
  const NEW_URL   = process.env.NEW_URL;        // hoặc hard-code
  const NIGHT_URL = process.env.NIGHT_URL;

  const destination = isDay ? NEW_URL : NIGHT_URL;
  res.writeHead(307, { Location: destination });
  res.end();
  return { props: {} };
}

export default function Home() {
  return null;
}
