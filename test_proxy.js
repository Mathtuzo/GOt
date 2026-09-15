const urls = [
  'https://www.lagardedenuit.com/wiki/images/Sarschamp.jpg',
  'https://corsproxy.io/?' + encodeURIComponent('https://www.lagardedenuit.com/wiki/images/Sarschamp.jpg'),
  'https://api.allorigins.win/raw?url=' + encodeURIComponent('https://www.lagardedenuit.com/wiki/images/Sarschamp.jpg'),
  'https://images.weserv.nl/?url=' + encodeURIComponent('https://www.lagardedenuit.com/wiki/images/Sarschamp.jpg')
];

async function test() {
  for (const url of urls) {
    try {
      console.log('Testing', url);
      const res = await fetch(url);
      console.log('Status:', res.status, res.statusText);
      console.log('Content-Type:', res.headers.get('content-type'));
    } catch (e) {
      console.error('Error:', e.message);
    }
  }
}

test();
