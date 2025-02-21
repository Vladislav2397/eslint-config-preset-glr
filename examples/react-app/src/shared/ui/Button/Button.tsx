import React from 'react'
import styles from './Button.module.scss'

export type ButtonProps = {
    className?: string
    view: 'primary' | 'secondary'
}

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({ view, children }) => {
    if (!view) return null

    return (
        <div className={styles.root}>
            <div>{children}</div>
        </div>
    )
}
