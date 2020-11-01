import { h } from 'preact'
import { shallow } from 'enzyme'

jest.mock('linaria')

import Input from '../src/components/input'

const update = (text: string) => {
    console.log(text)
}

describe('Input', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<Input value="Input" onChange={update} />)
    })

    it('should render without errors', () => {
        expect(wrapper).toBeTruthy()
        wrapper.update()
    })
})
