import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  // apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  token: import.meta.env.SANITY_API_TOKEN, // Only if you want to update content with the client
});

export async function fetchPosts() {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    body,
    mainImage{
      asset->{
        url
      }
    }
  }`;
  const posts = await client.fetch(query);
  return posts;
}

export async function getPosts() {
  const posts = await client.fetch('*[_type == "post"]')
  return posts
}
