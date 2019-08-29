import Enzyme from 'enzyme';
import EnzymeAdopter from 'enzyme-adapter-react-16';


Enzyme.configure({
    adapter:new EnzymeAdopter(),
    disableLifecycleMethods: true
})