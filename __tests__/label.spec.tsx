import { h } from 'preact'
import { shallow } from 'enzyme'

jest.mock('linaria')

import Label from '../src/components/label'

describe('Label', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<Label>Label</Label>)
    })

    it('should render without errors', () => {
        expect(wrapper).toBeTruthy()
        wrapper.update()
    })
})
