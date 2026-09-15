const search = 'Pinkmaiden';
const url = `https://www.lagardedenuit.com/wiki/api.php?action=query&list=search&srsearch=${encodeURIComponent(search)}&utf8=&format=json`;

try {
  const res = await fetch(url);
  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));
} catch(e) {
  console.log("Error", e);
}
