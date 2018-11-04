import React from 'react';

const ThemeContext = React.createContext('light');


export default function withTheme(Component) {
    return function ThemeComponent(props) {
        return (
            <ThemeContext.Consumer>
                {(theme) => <Component {...props} theme={theme}></Component>}
            </ThemeContext.Consumer>
        )
    }
}