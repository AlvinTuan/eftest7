import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'
import '../menu-item.scss'
import { Link } from 'react-router-dom'

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            // <a target='_blank' rel='noopener noreferrer' href='https://www.antgroup.com'>
            //     Quick check (15-min)
            // </a>
            <Link to={'/quick-check'}>Quick check (15-min)</Link>
        )
    },
    {
        key: '2',
        label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
                2nd menu item
            </a>
        )
    },
    {
        key: '3',
        label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
                3rd menu item
            </a>
        )
    }
]

export default function OurTests() {
    return (
        <Dropdown menu={{ items }} placement='bottomLeft'>
            <p className='text-base md:text-sm hover:underline cursor-pointer font-semibold'>Our Tests</p>
        </Dropdown>
    )
}
