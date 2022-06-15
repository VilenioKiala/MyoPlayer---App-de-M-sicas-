import { CreateMusic } from './CreateMusic';
import { DeleteMusic } from './DeleteMusic';
import { ListMusics } from './ListMusics';
import { ShowOneMusic } from './ShowOneMusic';
import { UpdateMusic } from './UpdateMusic';


const createMusic = new CreateMusic()
const listMusics = new ListMusics()
const showOneMusic = new ShowOneMusic()
const updateMusic = new UpdateMusic()
const deleteMusic = new DeleteMusic()

export {
    createMusic,
    listMusics,
    updateMusic,
    showOneMusic,
    deleteMusic,
}