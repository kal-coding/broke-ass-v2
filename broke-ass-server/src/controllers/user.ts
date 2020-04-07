import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { User } from './../database/entities/User';

// Loads all users from the database.

export async function userGetAllAction(request: Request, response: Response) {
    // get a user repository to perform operations with post
    const userRepository = getManager().getRepository(User);

    // load a user by a given user id
    const users = await userRepository.find();

    // return loaded users
    response.send(users);
}

export async function userSaveAction(request: Request, response: Response) {
    // get a user repository to perform operations with user
    const userRepository = getManager().getRepository(User);

    // create a real user object from user json object sent over http
    const newUser = userRepository.create(request.body);

    // save received user
    await userRepository.save(newUser);

    // return saved user back
    response.send(newUser);
}