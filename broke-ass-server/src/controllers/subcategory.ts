import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { SubCategory } from './../database/entities/SubCategory';

export async function subCategoryGetAllAction(
    request: Request,
    response: Response
) {
    const subCategoryRepository = getManager().getRepository(SubCategory);
    const subCategories = await subCategoryRepository.find();
    response.send(subCategories);
}

export async function subCategorySaveAction(request: Request, response: Response) {
    const subCategoryRepository = getManager().getRepository(SubCategory);
    const newSubCategory = subCategoryRepository.create(request.body);
    await subCategoryRepository.save(newSubCategory);
    response.send(newSubCategory);
}
