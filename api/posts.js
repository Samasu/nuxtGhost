import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: 'https://sadakazumasunari.ghost.io',
    key: '1ae8ecffa4f8eeb2c410625e28',
    version: "v2"
});

export async function getPosts() {
    return await api.posts
     .browse({
         limit: "all",
         include: "tags, authors"
     })
     .catch(err => {
         console.error(err);
     })
}