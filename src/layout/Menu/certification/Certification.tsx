import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.antgroup.com'>
                EF SET Certificate™
            </a>
        )
    },
    {
        key: '2',
        label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
                Add to profile
            </a>
        )
    },
    {
        key: '3',
        label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
                English levels
            </a>
        )
    },
    {
        key: '4',
        label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
                Certificate search
            </a>
        )
    }
]

export default function Certification() {
    return (
        <Dropdown menu={{ items }} placement='bottomLeft'>
            <p className='text-base md:text-sm hover:underline cursor-pointer font-semibold'>Certification</p>
        </Dropdown>
    )
}
