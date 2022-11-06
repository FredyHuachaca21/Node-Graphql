import { Float, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

    @Query(()=> String, {description: 'Retorna un string de Hola Mundo', name: 'Hello'})
    HelloWorld(): string{
        return 'Hola Mundo';
    }

    @Query(()=> Float, {description: 'Retorna número Random', name: 'random'})
    getRandomNumber(): number{
        return Math.random() * 100;
    }


}
