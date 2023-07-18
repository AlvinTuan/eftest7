import type { MenuProps } from 'antd'
import { Button, Dropdown, Space } from 'antd'

const childrenDropdown: React.CSSProperties = {
    padding: '8px 56px 8px 5px'
}

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.antgroup.com'>
                Quick Check (15-min)
            </a>
        )
    },
    {
        key: '2',
        label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
                <span>EF SET 50 (50-min)</span>
            </a>
        )
    },
    {
        key: '3',
        label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
                <span>Assessment Solutions</span>
            </a>
        )
    }
]

const OurTests = () => {
    return (
        <Dropdown menu={{ items }} placement='bottomLeft'>
            <p className='hover:underline'>Our Tests</p>
        </Dropdown>
    )
}

export default OurTests
