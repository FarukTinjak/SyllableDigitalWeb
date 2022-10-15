import { Component, OnInit } from '@angular/core';
import axios from "axios";
import BlogPost from '../models/blogPost';
import {formatDate} from '../utils/formatting';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  formatDate = formatDate;
  blogPosts : BlogPost[] = [];

  constructor() {
  }

  async ngOnInit() {
    await this.loadBlogPosts();
  }

  private async loadBlogPosts() {
    let res = await axios.get('/blog');

    this.blogPosts = res.data;
  }
}
