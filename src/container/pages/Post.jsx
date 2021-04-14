<<<<<<< HEAD
/*
  author : Aziz Amerul Faozi
  desc : this code used for nothing.
*/

import React from 'react';
=======
import React from 'react';

>>>>>>> beec401... mantap
import {useParams} from 'react-router';

const postsData = require('./_posts.json');

<<<<<<< HEAD
/*
  used for show post
*/
=======
>>>>>>> beec401... mantap
export default function Post(){
    var {slug}=useParams(),
    post = findPostBySlug(slug);

    return (
        <div className="post-content-view">
            <h1 className="title">{post.title}</h1> 
            <content>{post.content}</content>   
        </div>
    );

}

function findPostBySlug(slug){
    return postsData.find(o=>o.slug===slug);
<<<<<<< HEAD
}
=======
}
>>>>>>> beec401... mantap
