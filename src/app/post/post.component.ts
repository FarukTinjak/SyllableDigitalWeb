import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import axios from "axios";
import BlogPost from "../models/blogPost";
import {formatDate} from '../utils/formatting';
// @ts-ignore
import Parser from '@son_xx/editor-js-parser'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  formatDate = formatDate;
  private route: ActivatedRoute;
  private postId: number|undefined;
  private sub: Subscription;
  public blogPost: BlogPost|undefined;
  public htmlContent: string = "";

  constructor(route: ActivatedRoute) {
    this.route = route;

    this.sub = this.route.params.subscribe(async params => {
      this.postId = +params['id'];

      await this.loadBlogPost();
    });

/*
*/
  }

  private async loadBlogPost() {
    let res = await axios.get('/blog/' + this.postId);

    this.blogPost = res.data;
    if(this.blogPost) {
      let parsedContent = JSON.parse(this.blogPost.content);
      const result = Parser(parsedContent.blocks);
      if(result != null){
        this.htmlContent = result;
      }


    }
  }
}
