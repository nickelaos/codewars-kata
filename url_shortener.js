const shortLong = new Map();
const longShort = new Map();
const ids = new Set();
const domain = "short.ly";

function urlShortener(longURL) {
  const urlExists = longShort.has(longURL);
  
  if (urlExists) {
    return longShort.get(longURL);
  }
  
  const id = generateUniqueId();
  const shortUrl = `${domain}/${id}`;
  
  shortLong.set(shortUrl, longURL);
  longShort.set(longURL, shortUrl);
  ids.add(id);
  
  return shortUrl;
}

function urlRedirector(shortURL) {
  return shortLong.get(shortURL);
}

function generateUniqueId() {
  let str = generator();
  
  if (ids.has(str)) {
    while (!ids.has(str)) {
      str = generator();
    }
  }
  
  return str;
}

function generator(size = 4) {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  let str = '';
  for (let i = 0; i < size; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
}
