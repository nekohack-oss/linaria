import { h } from 'preact'
import { shallow } from 'enzyme'

jest.mock('linaria')

import Select from '../src/components/select'

const options = [
    {
        value: 1,
        text: 'Angular',
    },
    {
        value: 2,
        text: 'React',
    },
    {
        value: 3,
        text: 'Vue',
    },
]

const update = (value: number) => {
    console.log(value)
}

describe('Select', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(
            <Select options={options} value={0} onChange={update} />
        )
    })

    it('should render without errors', () => {
        expect(wrapper).toBeTruthy()
        wrapper.update()
    })
})
