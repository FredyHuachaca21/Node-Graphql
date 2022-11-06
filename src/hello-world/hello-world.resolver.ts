import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

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

    @Query(()=> Int, {description: 'Retorna número  entre cero & y', name: 'randomFromZeroTo'})
    getRandomFromZeroTo(): number{
        return Math.floor(Math.random() * 5);
    }

    @Query(()=> Int, {description: 'Retorna número  entre cero(No excluyente) hasta arg(TO)', name: 'randomFromZeroToArg'})
    getRandomFromZeroToArg(@Args('to') to: number): number{
        return Math.floor(Math.random() * to);
    }

    @Query(()=> Int, {description: 'Retorna número  entre min (incluido) a max (excluido)', name: 'randomFromMinAndMax'})
    getRandomFromArgtoArg(@Args('min') min: number, @Args('max') max: number,): number{
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    @Query(()=> Int, {description: 'Retorna número  entre min  a max (excluido ambos)', name: 'randomFromMinAndMaxExclude'})
    getRandomFromArgtoArgExclude(@Args('min') min: number, @Args('max') max: number,): number{
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

}
