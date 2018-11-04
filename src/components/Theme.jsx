import React from 'react';

const ThemeContext = React.createContext('light');


export function withTheme(Component) {
    return function ThemeComponent(props) {
        return (
            <ThemeComponent.Consumer>
                {(theme) => <Component {...props} theme={theme}></Component>}
            </ThemeComponent.Consumer>
        )
    }

}