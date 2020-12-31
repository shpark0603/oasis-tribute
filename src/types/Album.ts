import { Asset, EntryFields } from "contentful";

export interface Album {
  title: EntryFields.Text;
  description: EntryFields.RichText;
  cover: Asset;
  releasedAt: EntryFields.Date;
  worldWideSales: EntryFields.Integer;
  length: EntryFields.Text;
}
