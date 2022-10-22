import { shallow } from 'enzyme';
import { GifGird } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Puebas en el componente GifGrid', () => {
    
    const category = 'Perros';
    
    test('Debe mostrar el componente correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow ( < GifGird category={ category } />); 
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe regresar la información cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https//hola.com',
            title: 'cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow ( < GifGird category={ category } />);
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )
    })
    
    
})


