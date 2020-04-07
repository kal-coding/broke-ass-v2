import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { Tag } from './../database/entities/Tag';

export async function tagGetAllAction(request: Request, response: Response) {
    const tagRepository = getManager().getRepository(Tag);
    const tags = await tagRepository.find();
    response.send(tags);
}

export async function tagSaveAction(request: Request, response: Response) {
    const tagRepository = getManager().getRepository(Tag);
    const newTag = tagRepository.create(request.body);
    await tagRepository.save(newTag);
    response.send(newTag);
}
