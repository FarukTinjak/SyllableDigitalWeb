import * as moment from 'moment';

export default class BlogPost {
  id!: number;
  title!: string;
  subtitle!: string;
  slug!: string;
  thumbnail_path!: string;
  content!: string;
  created_at!: string;
  updated_at!: string|null;
}
