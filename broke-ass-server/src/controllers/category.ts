import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { Category } from './../database/entities/Category';

export async function categoryGetAllAction(request: Request, response: Response) {
    const categoryRepository = getManager().getRepository(Category);
    const categories = await categoryRepository.find();
    response.send(categories);
}

export async function categorySaveAction(request: Request, response: Response) {
    const postRepository = getManager().getRepository(Category);
    const newPost = postRepository.create(request.body);
    await postRepository.save(newPost);
    response.send(newPost);
}
