<<<<<<< HEAD
import { configure} from 'enzyme';
=======
import { configure,shallow } from 'enzyme';
>>>>>>> chore(testing): setup testing environment
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.shallow=shallow
