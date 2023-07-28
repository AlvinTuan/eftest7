import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.antgroup.com'>
                About the CEFR
            </a>
        )
    },
    {
        key: '2',
        label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
                A1
            </a>
        )
    },
    {
        key: '3',
        label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
                A2
            </a>
        )
    },
    {
        key: '4',
        label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
                B1
            </a>
        )
    },
    {
        key: '5',
        label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
                B2
            </a>
        )
    },
    {
        key: '6',
        label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
                C1
            </a>
        )
    },
    {
        key: '7',
        label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
                C2
            </a>
        )
    }
]

export default function Cefr() {
    return (
        <Dropdown menu={{ items }} placement='bottomLeft'>
            <p className='text-base md:text-sm hover:underline cursor-pointer font-semibold'>CEFR</p>
        </Dropdown>
    )
}
