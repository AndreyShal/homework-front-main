import React from 'react'

// добавить в проект иконки и импортировать
const downIcon = 'https://cdn-icons-png.flaticon.com/512/25/25224.png'
const upIcon = 'https://cdn-icons-png.flaticon.com/512/25/25678.png'
const noneIcon = 'https://cdn-icons-png.flaticon.com/512/25/25756.png'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if(sort === "") {
        return down
    }  else if(sort === down) {
        return up
    } else if (sort === up) {
        return ""
    } else {
        return down
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img
                width={"10px"}
                id={id + '-icon-' + sort}
                src={icon}
                alt={icon}
            />

        </span>
    )
}

export default SuperSort
