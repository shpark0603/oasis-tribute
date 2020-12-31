import { createClient, Entry } from "contentful";
import { Album } from "../types/Album";

const client = createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

const contentfulClient = {
  async getAlbums(): Promise<Entry<Album>[]> {
    const data = await client.getEntries<Album>({ content_type: "album" });

    data.items.sort(
      (a, b) =>
        new Date(a.sys.createdAt).getTime() -
        new Date(b.sys.createdAt).getTime()
    );

    return data.items;
  },

  async getAlbum(id: string): Promise<Album> {
    const album = await client.getEntry<Album>(id);
    return album.fields;
  },
};

export default contentfulClient;
