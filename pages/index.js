// pages/index.js

export async function getServerSideProps({ res }) {
  const now = new Date();
  const totalMinutes = now.getHours() * 60 + now.getMinutes();

  // Debug log ra console của terminal
  //console.log(`[redirect-debug] giờ hiện tại: ${now.toTimeString()}, totalMinutes=${totalMinutes}`);

  const isDay = totalMinutes >= 6 * 60 && totalMinutes <= 18 * 60;
  const destination = isDay
    ? process.env.NEW_URL
    : process.env.NIGHT_URL;

  res.writeHead(307, { Location: destination });
  res.end();
  return { props: {} };
}

export default function Home() {
  return null;
}
