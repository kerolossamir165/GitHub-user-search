export default function getPagination(res) {
  let parts = res.headers.link.split(",").reduce((acc, link) => {
    let match = link.match(/<(.*)>; rel="(\w*)"/);
    let url = match[1];
    let rel = match[2];
    acc[rel] = url;
    return acc;
  }, {});

  return parts;
}
