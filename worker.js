export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/projects" || url.pathname === "/projects/") {
      url.pathname = "/projects.html";
    } else if (url.pathname === "/contact" || url.pathname === "/contact/") {
      url.pathname = "/contact.html";
    } else if (url.pathname === "/index" || url.pathname === "/index/") {
      url.pathname = "/index.html";
    } else if (url.pathname === "/" || url.pathname === "") {
      url.pathname = "/index.html";
    }

    return env.ASSETS.fetch(new Request(url, request));
  },
};
