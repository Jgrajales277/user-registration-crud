import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post.model';
//Importar servicio
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  Posts: Post[]
  constructor( private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((res) => {
      
      this.Posts = res.map( (e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Post)  
        };
      });

    });
  }

deleteRow = (post) => this.postService.deletePost(post);

}

