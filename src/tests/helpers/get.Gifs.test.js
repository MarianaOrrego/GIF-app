import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGifs Fetch', () => {
  
    test('Debe tener 10 elementos', async() => {
        const gifs = await getGifs('Hola');

        expect( gifs.length ).toBe( 10 );
    })
    
    test('No se envia el props', async() => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );
    })
})
