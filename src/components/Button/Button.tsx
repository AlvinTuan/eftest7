import { Link } from 'react-router-dom'

interface ButtonProps {
    classBgTextColor: string
    label: string
    toLink: string | ''
}

export default function Button({ classBgTextColor, label, toLink }: ButtonProps) {
    return (
        <div className='flex mt-8 items-center flex-col lg:flex-row'>
            <Link
                to={`${toLink}`}
                className={`px-6 h-14 md:h-12 text-base md:text-sm cursor-pointer font-semibold flex items-center rounded-full shadow-btn ${classBgTextColor}`}
                target='_self'
            >
                <span>{label}</span>
            </Link>
        </div>
    )
}
