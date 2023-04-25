import { Injectable } from '@angular/core';

//importar los modulos para trabajar con firebase
import { AngularFirestore } from '@angular/fire/compat/firestore';

//importar modelo
import { Post } from './post.model';
import { AngularFireModule } from '@angular/fire/compat';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private angularfirestore: AngularFirestore) {}

  //Metodos para el  CRUD
  getPosts() {
    return this.angularfirestore
    .collection('posts')
    .snapshotChanges()
  }

  getPostById(id) {
    return this.angularfirestore
    .collection('posts')
    .doc(id)
    .valueChanges()
  }

  createPost(post: Post) {
    return new Promise<any> (( resolve, reject) => {
      this.angularfirestore
      .collection('posts')
      .add(post)
      .then( (response)=>{
        console.log(response)
      },
      (error) => {
        reject(error)
      })

    })
  }

  updatePost(post: Post, id) {
    return this.angularfirestore
    .collection('posts')
    .doc(id)
    .update({
      name: post.name,
      email: post.email,
      address: post.address,
      phone: post.phone
    });

  }

  deletePost(post) {
    return this.angularfirestore
    .collection('posts')
    .doc(post.id)
    .delete();
  }
}
