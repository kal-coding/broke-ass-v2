import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { User } from './../database/entities/User';

// Loads all posts from the database.

export async function postGetAllAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const postRepository = getManager().getRepository(User);

    // load a post by a given post id
    const posts = await postRepository.find();

    // return loaded posts
    response.send(posts);
}

export async function postSaveAction(request: Request, response: Response) {
    // get a post repository to perform operations with post
    const postRepository = getManager().getRepository(User);

    // create a real post object from post json object sent over http
    const newPost = postRepository.create(request.body);

    // save received post
    await postRepository.save(newPost);

    // return saved post back
    response.send(newPost);
}